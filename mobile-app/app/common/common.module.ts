import { NgModule } from '@angular/core';

import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';
import { ConfigService } from './services/config.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [QuestionService, QuizService, ConfigService],
})
export class CommonModule { }
