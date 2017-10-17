import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Question } from '../shared/data/question';
import { QuestionsService } from '../shared/services/questions.service';

@Component({
    selector: 'Quiz',
    moduleId: module.id,
    styleUrls: ['./quiz.component.css'],
    templateUrl: './quiz.component.html'
})

export class QuizComponent implements OnInit {

    questions: Question[];
    question: Question; // pregunta actual
    questionNumber: number; // número de pregunta actual
    currentRightAnswer: number;
    currentWrongAnswer: number;
    rightCount: number;
    wrongCount: number;
    blankCount: number;
    notaFinal: number;
    state: QuizState = QuizState.INITIALIZING;
    cabecera: string;

    constructor(
        protected page: Page,
        protected questionsService: QuestionsService
    ) {
    }

    ngOnInit() {
        this.questionsService.getRandomQuestions(5).subscribe(r => {
            this.questions = r;
            this.questionNumber = 0;
            this.question = null;
            this.rightCount = 0;
            this.wrongCount = 0;
            this.blankCount = 0;
            this.advance();
        });
    }

    sendAnswer(idx) {
        if(this.state === QuizState.QUESTION_IN_PROGRESS) { // ignore other clicks
            this.currentRightAnswer = this.question.respuestaCorrecta;
            if(idx === -1) { // dejar en blanco
                this.blankCount++;
                this.currentWrongAnswer = null;
            } else if(this.currentRightAnswer === idx) {
                this.rightCount++;
                this.currentWrongAnswer = null;
            } else {
                this.wrongCount++;
                this.currentWrongAnswer = idx;
            }
            
            this.state = QuizState.QUESTION_ANSWERED;
        }
    }

    advance() {
        this.questionNumber++;
        this.question = this.questions[this.questionNumber-1];
        this.currentRightAnswer = null;
        this.currentWrongAnswer = null;
        if(this.question) {
            this.state = QuizState.QUESTION_IN_PROGRESS;
        } else {
            this.state = QuizState.FINISHED;
            this.notaFinal = this.calcularNotaFinal();
        }
        this.cabecera = this.buildCabecera();
    }

    buildCabecera(): string {
        if(this.question) {
            return `Pregunta #${this.question.numeroOriginal} (${this.questionNumber} de ${this.questions.length})`;
        } else {
            return '';
        }
    }

    calcularNotaFinal(): number {
        // cada respuesta incorrecta resta el 25% de una correcta

        let puntosPorCorrecta = 10 / this.questions.length;
        let puntosPorFallo = puntosPorCorrecta * 0.25;

        return this.rightCount * puntosPorCorrecta - this.wrongCount * puntosPorFallo;
    }

}

enum QuizState {
    INITIALIZING = 0,
    QUESTION_IN_PROGRESS = 1,
    QUESTION_ANSWERED = 2,
    FINISHED = 3
}