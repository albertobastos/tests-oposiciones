import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../data/question';

import * as ALL_QUESTIONS from '../resources/questions.json';

@Injectable()
export class QuestionsService {

    constructor() { }
    
    getTotalQuestions(): Observable<number> {
        return Observable.of(ALL_QUESTIONS['length']);
    }

    getRandomQuestions(howMany: number): Observable<Question[]> {
        let shuffled: Question[] = Array.prototype.slice.apply(ALL_QUESTIONS);
        shuffled.sort(() => 0.5 - Math.random());
        return Observable.of(shuffled.slice(0, howMany));
    }

}