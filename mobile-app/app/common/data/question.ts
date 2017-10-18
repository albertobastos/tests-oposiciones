export class Question {

    constructor(
        public number: string,
        public sectionTitle: string,
        public question: string,
        public answers: string[],
        public rightAnswerIndex: number
    ) {
    }

}