import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { BaseComponent } from '../common/base.component';
import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: 'results',
    moduleId: module.id,
    styleUrls: ['./results.component.css'],
    templateUrl: './results.component.html'
})

export class ResultsComponent extends BaseComponent {
    constructor(
        protected page: Page,
        public quizService: QuizService
    ) {
        super(page);
    }
}