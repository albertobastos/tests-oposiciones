import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { QuizRoutingModule } from "./quiz-routing.module";
import { QuizComponent } from "./quiz.component";

@NgModule({
    imports: [
        NativeScriptModule,
        QuizRoutingModule
    ],
    declarations: [
        QuizComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QuizModule { }
