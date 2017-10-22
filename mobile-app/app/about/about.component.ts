import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { BaseComponent } from '../common/base.component';

@Component({
    selector: 'about',
    moduleId: module.id,
    styleUrls: ['./about.component.css'],
    templateUrl: 'about.component.html'
})

export class AboutComponent extends BaseComponent {
    constructor(
        page: Page,
        public routerExtensions: RouterExtensions
    ) {
        super(page);
    }
}