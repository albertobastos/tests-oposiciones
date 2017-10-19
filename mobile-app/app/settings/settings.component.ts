import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../common/base.component';
import { ConfigService } from '../common/services/config.service';

@Component({
    selector: 'settings',
    moduleId: module.id,
    styleUrls: ['./settings.component.css'],
    templateUrl: './settings.component.html'
})

export class SettingsComponent extends BaseComponent {
    constructor(
        protected page: Page,
        protected routerExtensions: RouterExtensions,
        public configService: ConfigService
    ) { 
        super(page);
    }

    get questionsAmount(): number {
        return this.configService.getQuestionsAmount();
    }

    get sections(): string[] {
        return this.configService.getSections();
    }

    set questionsAmount(amount: number) {
        this.configService.setQuestionsAmount(amount);
    }

    isAmount(amount: number): boolean {
        return this.questionsAmount === amount;
    }

    isSectionSelected(section: string): boolean {
        return this.sections.indexOf(section) >= 0;
    }

    toggleSection(section: string) {
        let tmp = this.sections.slice(); // create a copy!
        let idx = tmp.indexOf(section);
        if(idx >= 0) { // remove
            tmp.splice(idx, 1);
        } else { // add
            tmp.push(section);
        }
        this.configService.setSections(tmp);
    }

    accept() {
        this.routerExtensions.navigate(['/home']);
    }

}