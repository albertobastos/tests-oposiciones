import { Injectable } from '@angular/core';

import { QuestionService } from './question.service';

@Injectable()
export class ConfigService {

    constructor(
        protected questionService: QuestionService
    ) { }

    getQuestionsAmount(): number {
        return 10; // TODO
    }

    getSectionTitles(): string[] {
        return this.questionService.getSectionTitles(); // TODO
    }

    getAllowedQuestionsAmounts(): number[] {
        return [10, 20, 50, 100];
    }

    getAllSectionTitles(): string[] {
        return this.questionService.getSectionTitles();
    }
}