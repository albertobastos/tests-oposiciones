import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page';
import { QuestionsService } from '../common/services/questions.service';
import { Question } from '../common/data/question';

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        protected page: Page,
        public questionsService: QuestionsService,
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
}
