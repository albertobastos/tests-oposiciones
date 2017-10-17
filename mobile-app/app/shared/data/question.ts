export class Question {

    constructor(
        public numeroOriginal: string,
        public tituloSeccion: string,
        public pregunta: string,
        public respuestas: string[],
        public respuestaCorrecta: number
    ) {
    }

}