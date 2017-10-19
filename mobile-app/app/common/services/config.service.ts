import { Injectable } from '@angular/core';

import { QuestionService } from './question.service';

@Injectable()
export class ConfigService {

    properties: {[key: string]: any};

    constructor(
        protected questionService: QuestionService
    ) {
    }

    getQuestionsAmount(): number {
        return this.getPropertyOrDefault('questionsAmount', 10);
    }

    getSections(): string[] {
        return this.getPropertyOrDefault('sections', this.questionService.getSectionTitles());
    }

    setQuestionsAmount(amount: number) {
        this.setProperty('questionsAmount', amount);
    }

    setSections(sections: string[]) {
        if(sections && sections.length > 0) {
            return this.setProperty('sections', sections);
        }
    }

    getAllQuestionsAmounts(): number[] {
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