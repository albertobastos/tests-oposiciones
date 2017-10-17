import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class Parser {

    List<String> NUMEROS_RESPUESTA = Arrays.asList("A", "B", "C", "D");

    public static void main(String[] args) throws Exception {
        String fileOut = System.getProperty("user.home") + File.separator + "preguntas_" + new Date().getTime() + ".json";
        System.out.println("File: " + fileOut);
        new Parser().parse("preguntas.txt", "respuestas.txt", fileOut);
    }

    public void parse(String preguntas, String respuestas, String fileOut) throws Exception {
        List<Pregunta> listPreguntas = leerFicheroPreguntas(preguntas);
        Map<String, Integer> mapRespuestas = leerFicheroRespuestas(respuestas);
        rellenarRespuestaCorrecta(listPreguntas, mapRespuestas);
        guardarPreguntasJson(listPreguntas, fileOut);
    }

    private void guardarPreguntasJson(List<Pregunta> listPreguntas, String ruta) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.writeValue(new File(ruta), listPreguntas);
    }

    private void rellenarRespuestaCorrecta(List<Pregunta> listPreguntas, Map<String, Integer> mapRespuestas) {
        listPreguntas.forEach(p -> {
            p.setRespuestaCorrecta(mapRespuestas.get(p.getNumeroOriginal()));
        });
    }

    private List<Pregunta> leerFicheroPreguntas(String fichero) throws Exception {
        List<Pregunta> res = new ArrayList<>();

        Pattern patternEnunciado = Pattern.compile("^([0-9]+)\\.-\\s(.*)$");
        Pattern patternInicioRespuesta = Pattern.compile("^[abcd]\\)\\s(.*)$");
        final Pregunta[] pregunta = new Pregunta[0];

        try(Stream<String> lines = Files.lines(Paths.get(this.getClass().getClassLoader().getResource(fichero).toURI()))) {
            lines.forEach(s -> {
                Matcher matcher = patternEnunciado.matcher(s);
                if(matcher.matches()) { // enunciado de una nueva pregunta
                    Pregunta p = new Pregunta();
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
        return res;
    }

    private Map<String,Integer> leerFicheroRespuestas(String fichero) throws Exception {
        Map<String,Integer> res = new HashMap<>();
        Pattern pattern = Pattern.compile("^([0-9]+)\\.-.*([ABCD])$");
        try(Stream<String> lines = Files.lines(Paths.get(this.getClass().getClassLoader().getResource(fichero).toURI()))) {
            lines.forEach(s -> {
                Matcher matcher = pattern.matcher(s);
                matcher.matches();
                res.put(matcher.group(1), letraRespuestaANumero(matcher.group(2)));
            });
        }
        return res;
    }

    private Integer letraRespuestaANumero(String letra) {
        return NUMEROS_RESPUESTA.indexOf(letra);
    }

}
