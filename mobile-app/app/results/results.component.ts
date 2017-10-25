import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";
import * as application from "application";
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../common/base.component';
import { QuizService } from '../common/services/quiz.service';

@Component({
    selector: 'results',
    moduleId: module.id,
    styleUrls: ['./results.component.css'],
    templateUrl: './results.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResultsComponent extends BaseComponent {
    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        public quizService: QuizService
    ) {
        super(page);
        // sobreescribimos el "Back" para que vaya a la home en lugar de al quiz.
        // el día que desde el quiz podamos venir aquí con replaceUrl: true, esto ya no será necesario
        let backHandler = this.goHome.bind(this);
        page.on('loaded', () => {
            isAndroid && application.android.on(AndroidApplication.activityBackPressedEvent, backHandler);
        });
        page.on('unloaded', () => {
            isAndroid && application.android.off(AndroidApplication.activityBackPressedEvent, backHandler);
        });
    }

    goHome(data: AndroidActivityBackPressedEventData) {
        data && (data.cancel = true);
        this.routerExtensions.navigate(['/home'], { clearHistory: true });
    }
}