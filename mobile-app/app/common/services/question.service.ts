import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../data/question';

import * as ALL_QUESTIONS from '../resources/questions.json';

@Injectable()
export class QuestionService {

    sectionTitles: string[];
    questions: Question[];

    constructor() {
        this.questions = Array.prototype.slice.apply(ALL_QUESTIONS);
        this.sectionTitles = this.questions
                                .map(q => q.sectionTitle)
                                .filter((str, index, self) => index === self.indexOf(str)); // remove repeated
    }
    
    getTotalQuestions(): number {
        return this.questions.length;
    }

    getSectionTitles(): string[] {
        return this.sectionTitles;
    }

    getRandomQuestions(howMany: number, sectionTitles: string[]): Question[] {
        let list: Question[];
        list = this.questions.filter(q => sectionTitles.indexOf(q.sectionTitle) >= 0); // filter by section title
        list = list.sort(() => 0.5 - Math.random()); // shuffle
        return list.slice(0, howMany); // choose N first
    }

}