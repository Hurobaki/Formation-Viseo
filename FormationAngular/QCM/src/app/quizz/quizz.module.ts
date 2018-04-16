import { QuizzComponent } from './quizz.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [QuizzComponent],
  imports: [BrowserModule, NgbModule],
  exports: [QuizzComponent]
})
export class QuizzModule {
}

