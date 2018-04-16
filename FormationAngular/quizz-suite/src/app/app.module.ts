import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
import { QuizzModule } from "./quizz/quizz.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    QuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
