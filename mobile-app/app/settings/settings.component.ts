import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
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
        public configService: ConfigService
    ) { 
        super(page);
    }

    get questionsAmount(): number {
        return this.configService.getQuestionsAmount();
    }

    get sectionTitles(): string[] {
        return this.configService.getSectionTitles();
    }

    isAmount(amount: number): boolean {
        return this.questionsAmount === amount;
    }

    isSectionSelected(section: string): boolean {
        return this.sectionTitles.indexOf(section) >= 0;
    }

}