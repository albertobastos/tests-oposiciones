import { Injectable } from '@angular/core';

import { QuestionService } from './question.service';

@Injectable()
export class ConfigService {

    properties: {[key: string]: any};
    questionsAmount: number;        // preguntas por test
    sections: string[];             // secciones a incluir

    constructor(
        protected questionService: QuestionService
    ) {
        this.questionsAmount = this.getPropertyOrDefault('questionsAmount', 10);
        this.sections = this.getPropertyOrDefault('sections', this.getAllSections());
    }

    getQuestionsAmount(): number {
        return 10; // TODO
    }

    getSections(): string[] {
        return this.questionService.getSectionTitles(); // TODO
    }

    getAllowedQuestionsAmounts(): number[] {
        return [10, 20, 50, 100];
    }

    getAllSections(): string[] {
        return this.questionService.getSectionTitles();
    }

    private getPropertyOrDefault<T>(name: string, defaultValue: T): T {
        this.properties = this.properties || {};
        return this.properties[name] || defaultValue;
    }

    private setProperty(name: string, value: any) {
        this.properties = this.properties || {};
        this.properties[name] = value;
    }
}