import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { BaseComponent } from '../common/base.component';
import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent extends BaseComponent implements OnInit {

    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        protected quizService: QuizService
    ) {
        super(page);
    }

    ngOnInit() {
        //this.startQuiz(); // just devel
        //if(1>0) return;        
        this.quizService.initQuiz();
        for(let i=0;i<this.quizService.totalQuestions;i++) {
            this.quizService.answer(1);
            if(!this.quizService.isLastQuestion()) {
                this.quizService.nextQuestion();
            }
        }
        this.routerExtensions.navigate(['/results']);
    }

    startQuiz() {
        this.quizService.initQuiz();
        this.routerExtensions.navigate(['/quiz']);
    }
}
