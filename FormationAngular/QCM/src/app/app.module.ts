import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { QuizzModule } from './quizz/quizz.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    QuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
