import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  selectedSubject: string|null = null;

  subjects: string[] = [
    'Javascript',
    'HTML 5',
    'Angular',
    'Typescript'
  ];

  handlerClick(subject: string) {
    this.selectedSubject = subject;
  }
}
