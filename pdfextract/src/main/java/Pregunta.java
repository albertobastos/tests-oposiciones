import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pregunta {
    private String numeroOriginal;
    private String tituloSeccion;
    private String pregunta;
    private List<String> respuestas;
    private int respuestaCorrecta;
}
