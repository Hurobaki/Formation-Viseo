import { Routes } from '@angular/router';

import { QuizzComponent } from "./quizz/quizz.component";
import { QuestionHandlerComponent } from "./quizz/question-handler/question-handler.component";

export const ROUTES: Routes = [
  {path: '', component: QuizzComponent},
  {path: 'questions/:id', component: QuestionHandlerComponent}
];
