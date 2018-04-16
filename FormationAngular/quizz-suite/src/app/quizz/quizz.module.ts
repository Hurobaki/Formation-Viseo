/**
 * Created by jean-marc on 12/04/2018.
 * @module module
 */
import { NgModule } from "@angular/core";
import { QuizzComponent } from "./quizz.component";
import { BrowserModule } from "@angular/platform-browser";
import { QuestionHandlerComponent } from './question-handler/question-handler.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizzService } from "./services/quizz.service";
import { QuizzServiceMock } from "./services/quizz.service.mock";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserModule, NgbModule, RouterModule],
  declarations: [QuizzComponent, QuestionHandlerComponent],
  providers: [{provide: QuizzService, useClass: QuizzServiceMock}],
  exports: [QuizzComponent]
})
export class QuizzModule {
}
