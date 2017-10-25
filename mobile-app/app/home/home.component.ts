import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { BaseComponent } from '../common/base.component';
import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends BaseComponent implements OnInit {

    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        protected quizService: QuizService
    ) {
        super(page);
        page.actionBarHidden = true;
    }

    ngOnInit() {
        //this._devel_gotoQuiz();
        //this._devel_gotoSettings();
        //this._devel_gotoResults();
        //this._devel_gotoAbout();
    }

    startQuiz() {
        this.quizService.initQuiz();
        this.routerExtensions.navigate(['/quiz']);
    }

    private _devel_gotoQuiz() {
        this.startQuiz();
    }

    private _devel_gotoSettings() {
        this.routerExtensions.navigate(['/settings']);
    }

    private _devel_gotoResults() {
        this.quizService.initQuiz();
        for(let i=0;i<this.quizService.totalQuestions;i++) {
            this.quizService.answer(1);
            if(!this.quizService.isLastQuestion()) {
                this.quizService.nextQuestion();
            }
        }
        this.routerExtensions.navigate(['/results']);
    }

    private _devel_gotoAbout() {
        this.routerExtensions.navigate(['/about']);
    }
}
