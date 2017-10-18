import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: 'results',
    moduleId: module.id,
    styleUrls: ['./results.component.css'],
    templateUrl: './results.component.html'
})

export class ResultsComponent implements OnInit {
    constructor(
        protected page: Page,
        public quizService: QuizService
    ) {
        page.actionBarHidden = false;
    }

    ngOnInit() { }
}