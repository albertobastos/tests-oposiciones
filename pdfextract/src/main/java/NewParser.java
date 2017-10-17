import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.apache.commons.lang3.StringUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.StringReader;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NewParser {

    List<String> NUMEROS_RESPUESTA = Arrays.asList("A", "B", "C", "D");

    public static void main(String[] args) throws Exception {
        String fileOut = System.getProperty("user.home") + File.separator + "preguntas_" + new Date().getTime() + ".json";
        System.out.println("File: " + fileOut);
        new NewParser().parse("pdf1.pdf", fileOut);
    }

    public void parse(String pdfFile, String outFile) throws Exception {
        try(InputStream is = this.getClass().getClassLoader().getResourceAsStream(pdfFile)) {
            String text = new PDFTextStripper().getText(PDDocument.load(is));
            List<Pregunta> preguntas = parsePreguntas(text);
            guardarPreguntasJson(preguntas, outFile);
        }
    }

    private void guardarPreguntasJson(List<Pregunta> listPreguntas, String ruta) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.writeValue(new File(ruta), listPreguntas);
    }

    private List<Pregunta> parsePreguntas(String rawContents) throws Exception {
        List<Pregunta> res = new ArrayList<>();

        Map<String, String> respuestas = new HashMap<>();
        final String[] tituloSeccionActual = new String[] { null };

        Pattern patternEnunciadoPregunta = Pattern.compile("^([0-9]+)\\.-\\s(.*)$");
        Pattern patternInicioRespuesta = Pattern.compile("^[abcd]\\)\\s(.*)$");
        Pattern patternLineaEnBlanco = Pattern.compile("^(\\s)*$");
        Pattern patternSolucion = Pattern.compile("^(Respuestas:)?\\s*([0-9]+)\\.-\\s([ABCD])(\\s)*$");
        Pattern patternNumeroPagina = Pattern.compile("^Página\\s[0-9]+$");
        Pattern patternTituloSeccion = Pattern.compile("^([0-9]+)-.*$");

        final Pregunta[] pregunta = new Pregunta[0];

        try(BufferedReader buffer = new BufferedReader(new StringReader(rawContents))) {
            buffer.lines().forEach(s -> {
                s = s.trim();
                if(patternLineaEnBlanco.matcher(s).matches()) {
                    return;
                }
                if(patternNumeroPagina.matcher(s).matches()) {
                    return;
                }

                Matcher matcher;

                matcher = patternSolucion.matcher(s);
                if(matcher.matches()) {
                    // es la solución a una pregunta
                    respuestas.put(matcher.group(2), matcher.group(3));
                    return;
                }

                matcher = patternEnunciadoPregunta.matcher(s);
                if(matcher.matches()) { // enunciado de una nueva pregunta
                    Pregunta p = new Pregunta();
                    p.setTituloSeccion(tituloSeccionActual[0]);
                    p.setNumeroOriginal(matcher.group(1));
                    p.setPregunta(matcher.group(2));
                    p.setRespuestas(new ArrayList<String>());
                    res.add(p);
                    return;
                }

                matcher = patternInicioRespuesta.matcher(s);
                if(matcher.matches()) { // inicio de una nueva respuesta
                    Pregunta p = res.get(res.size()-1);
                    p.getRespuestas().add(matcher.group(1));
                    return;
                }

                matcher = patternTituloSeccion.matcher(s);
                if(matcher.matches()) {
                    tituloSeccionActual[0] = s;
                    return;
                }

                // por descarte, es la continuación o bien de un enunciado o bien de una respuesta
                Pregunta p = res.get(res.size()-1);
                if(p.getRespuestas().isEmpty()) {
                    // todavía no hay respuestas, por lo tanto es continuación del enunciado
                    p.setPregunta(p.getPregunta() + " " + s);
                } else {
                    // estamos ante la continuación de la última respuesta que introduimos
                    String ultimaRespuesta = p.getRespuestas().remove(p.getRespuestas().size()-1);
                    p.getRespuestas().add(ultimaRespuesta + " " + s);
                }
            });
        }

        checksPreguntas(res, respuestas);

        return res;
    }

    private void checksPreguntas(List<Pregunta> preguntas, Map<String, String> respuestas) {
        preguntas.forEach(p -> {
            p.setRespuestaCorrecta(letraRespuestaANumero(respuestas.get(p.getNumeroOriginal())));
            if(StringUtils.isBlank(p.getTituloSeccion())) {
                System.out.println("Pregunta sin titulo de seccion: " + p.getNumeroOriginal());
            }
            if(p.getRespuestas().size() < 3) {
                System.out.println("Pregunta sin las respuestas esperadas: " + p.getNumeroOriginal());
            }
            if(p.getRespuestaCorrecta() < 0) {
                System.out.println("Pregunta sin respuesta correcta: " + p.getNumeroOriginal());
            }
        });
    }

    private Integer letraRespuestaANumero(String letra) {
        return NUMEROS_RESPUESTA.indexOf(letra);
    }

}
