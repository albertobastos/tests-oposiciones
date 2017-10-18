import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';

import { Question } from '../common/data/question';
import { QuizService, QuizAnswer } from '../common/services/quiz.service';

@Component({
    selector: 'Quiz',
    moduleId: module.id,
    styleUrls: ['./quiz.component.css'],
    templateUrl: './quiz.component.html'
})

export class QuizComponent implements OnInit {

    state: QuizState = QuizState.INITIALIZING;
    lastAnswerIndex: number;

    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        protected quizService: QuizService
    ) {
    }

    ngOnInit() {
    }

    get isQuestionAnswered(): boolean {
        return this.isQuizFinished || this.state === QuizState.QUESTION_ANSWERED;
    }

    get isQuizFinished(): boolean {
        return this.state === QuizState.FINISHED;
    }

    get current(): Question {
        return this.quizService.currentQuestion;
    }

    getAnswerClass(idx: number): string {
        let clazz = '';
        if(this.isQuestionAnswered) {
            if(this.current.rightAnswerIndex === idx) {
                clazz = 'right-answer';
            } else if(this.lastAnswerIndex === idx) {
                clazz = 'wrong-answer';
            }
        }
        return clazz;
    }

    sendAnswer(idx: number) {
        this.lastAnswerIndex = idx;
        this.quizService.answer(idx);
        this.state = this.quizService.isLastQuestion() ? QuizState.FINISHED : QuizState.QUESTION_ANSWERED;
    }

    nextQuestion() {
        if(!this.quizService.isLastQuestion()) {
            this.quizService.nextQuestion();
            this.state = QuizState.QUESTION_IN_PROGRESS;
            this.lastAnswerIndex = null;
        }
    }

    end() {
        //this.routerExtensions.navigate(['/quizresults']);
    }

}

enum QuizState {
    INITIALIZING = 0,
    QUESTION_IN_PROGRESS = 1,
    QUESTION_ANSWERED = 2,
    FINISHED = 3
}