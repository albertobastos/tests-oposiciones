import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';

import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        protected quizService: QuizService
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    startQuiz() {
        this.quizService.initQuiz();
        this.routerExtensions.navigate(['/quiz']);
    }
}
