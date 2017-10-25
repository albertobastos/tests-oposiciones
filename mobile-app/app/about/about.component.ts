import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import * as utils from 'tns-core-modules/utils/utils'
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../common/base.component';

@Component({
    selector: 'about',
    moduleId: module.id,
    styleUrls: ['./about.component.css'],
    templateUrl: 'about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutComponent extends BaseComponent {
    constructor(
        page: Page,
        public routerExtensions: RouterExtensions
    ) {
        super(page);
    }

    url(link: string) {
        utils.openUrl(link);
    }
}