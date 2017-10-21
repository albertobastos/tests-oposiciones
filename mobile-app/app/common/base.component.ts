import { Page } from 'tns-core-modules/ui/page';

export class BaseComponent {
    constructor(
        protected page: Page
    ) {
        //page.actionBarHidden = true;
    }
}