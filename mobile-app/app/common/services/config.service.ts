import { Injectable } from '@angular/core';
import * as appSettings from 'application-settings';

import { QuestionService } from './question.service';

@Injectable()
export class ConfigService {

    static SETTINGS_VERSION = "0.1";

    constructor(
        protected questionService: QuestionService
    ) {
        // si hacemos un cambio en los settings, los reseteamos
        if(appSettings.getString("VERSION") !== ConfigService.SETTINGS_VERSION) {
            appSettings.clear();
            appSettings.setString("VERSION", ConfigService.SETTINGS_VERSION);
        }
    }

    getQuestionsAmount(): number {
        let str = this.getPropertyOrDefault('questionsAmount', ''+this.getAllQuestionsAmounts()[0]);
        return Number(str);
    }

    getSections(): string[] {
        let str = this.getPropertyOrDefault('sections');
        if(str) {
            return JSON.parse(str);
        } else {
            return this.questionService.getSectionTitles();
        }
    }

    setQuestionsAmount(amount: number) {
        this.setProperty('questionsAmount', ''+amount);
    }

    setSections(sections: string[]) {
        if(sections && sections.length > 0) {
            return this.setProperty('sections', JSON.stringify(sections));
        }
    }

    getAllQuestionsAmounts(): number[] {
        return [10, 20, 50, 100];
    }

    getAllSections(): string[] {
        return this.questionService.getSectionTitles();
    }

    // lo guardamos todos como String, no es muy eficiente pero cumple el trabajo

    private getPropertyOrDefault(name: string, defaultValue?: string): string {
        return appSettings.getString(name) || defaultValue;
    }

    private setProperty(name: string, value: string) {
        appSettings.setString(name, value);
    }
}