import { Component } from '@angular/core';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";
import * as application from "application";
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "ui/dialogs";
import { BaseComponent } from '../common/base.component';
import { Question } from '../common/data/question';
import { QuizService, QuizAnswer } from '../common/services/quiz.service';

@Component({
    selector: 'Quiz',
    moduleId: module.id,
    styleUrls: ['./quiz.component.css'],
    templateUrl: './quiz.component.html'
})

export class QuizComponent extends BaseComponent {

    state: QuizState = QuizState.INITIALIZING;
    lastAnswerIndex: number;

    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        public quizService: QuizService
    ) {
        super(page);
        // sobreescribimos el "Back" para pedirle confirmación, ya que hacerlo
        // implica perder todo el progreso del quiz actual
        let backHandler = this.goBack.bind(this);
        page.on('loaded', () => {
            isAndroid && application.android.on(AndroidApplication.activityBackPressedEvent, backHandler);
        });
        page.on('unloaded', () => {
            isAndroid && application.android.off(AndroidApplication.activityBackPressedEvent, backHandler);
        });
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
        if(!this.isQuestionAnswered) { // avoid changing the answer!
            this.lastAnswerIndex = idx;
            let result: QuizAnswer = this.quizService.answer(idx);
            this.state = this.quizService.isLastQuestion() ? QuizState.FINISHED : QuizState.QUESTION_ANSWERED;
        }
    }

    nextQuestion() {
        if(!this.quizService.isLastQuestion()) {
            this.quizService.nextQuestion();
            this.state = QuizState.QUESTION_IN_PROGRESS;
            this.lastAnswerIndex = null;
        }
    }

    goBack(data: AndroidActivityBackPressedEventData) {
        data && (data.cancel = true);
        dialogs.confirm(
            'Todo tu progreso en el test actual se perderá. ¿Seguro que quieres salir?'
        ).then(result => result && this.routerExtensions.back());
    }

    goToResults() {
        this.routerExtensions.navigate(['/results']); // el día que soporten replaceUrl, ya no necesitaremos implementar el goBack de la pantalla de resultados
    }

    get stateText(): string {
        switch(this.quizService.currentAnswerResult) {
            case QuizAnswer.UNANSWERED:
                return 'Elija una respuesta...';
            case QuizAnswer.RIGHT:
                return 'Respuesta correcta';
            case QuizAnswer.WRONG:
                return 'Respuesta incorrecta';
            case QuizAnswer.BLANK:
                return '';
        }
    }

}

enum QuizState {
    INITIALIZING = 0,
    QUESTION_IN_PROGRESS = 1,
    QUESTION_ANSWERED = 2,
    FINISHED = 3
}