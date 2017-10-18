import { Injectable } from '@angular/core';

import { Question } from '../data/question';
import { ConfigService } from './config.service';
import { QuestionService } from './question.service';

@Injectable()
export class QuizService {

    _questions: Question[];
    _current: number;
    _answers: QuizAnswer[];

    constructor(
        protected configService: ConfigService,
        protected questionService: QuestionService
    ) { }

    initQuiz() {
        this._questions = this.questionService.getRandomQuestions(
            this.configService.getQuestionsAmount(),
            this.configService.getSectionTitles()
        );
        this._current = 0;
        this._answers = this._questions.map(q => QuizAnswer.UNANSWERED);
    }

    get currentQuestion(): Question {
        return this._questions[this._current];
    }

    get currentQuestionNumber(): number {
        return this._current+1;
    }

    answer(answer: number): QuizAnswer {
        if(answer == -1) {
            this._answers[this._current] = QuizAnswer.BLANK;
        } else {
            this._answers[this._current] = this._questions[this._current].rightAnswerIndex === answer ? QuizAnswer.RIGHT : QuizAnswer.WRONG;
        }
        return this._answers[this._current];
    }

    nextQuestion() {
        if(this.isLastQuestion()) {
            throw new Error("No more questions left!");
        }
        this._current++;
    }

    isLastQuestion(): boolean {
        return this._current >= this._questions.length-1;
    }

    get totalQuestions(): number {
        return this._questions.length;
    }

    get totalRightAnswers(): number {
        return this._answers.filter(ans => ans === QuizAnswer.RIGHT).length;
    }

    get totalWrongAnswers(): number {
        return this._answers.filter(ans => ans === QuizAnswer.WRONG).length;
    }

    get totalBlankAnswers(): number {
        return this._answers.filter(ans => ans === QuizAnswer.BLANK).length;
    }

    getQuizMark(): number {
        // 1 wrong answer ==> -25% right answer
        let markPerRightAnswer = 10 / this.totalQuestions;
        let markPerWrongAnswer = -0.25 * markPerRightAnswer;
        return this.totalRightAnswers * markPerRightAnswer + this.totalWrongAnswers * markPerWrongAnswer;
    }

}

export enum QuizAnswer {
    WRONG = 0,
    RIGHT = 1,
    BLANK = 2,
    UNANSWERED = 3
}