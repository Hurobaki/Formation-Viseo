/**
 * Created by jean-marc on 12/04/2018.
 * @module QuizzComponent
 */
import { Component, OnInit } from "@angular/core";
import { QuizzService, QuizzSubject } from "./services/quizz.service";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  subjects: QuizzSubject[];
  selectedSubject: QuizzSubject = null;
  finalScore: string = null;
  display: boolean = false;

  constructor(private quizzService: QuizzService) {
    this.finalScore = null;
  }

  setQuizzScore(score: string) {
    console.log("Final score = " + this.finalScore);
  }

  get score(): string {
    return this.finalScore;
  }

  set score(newScore) {
    this.finalScore = newScore;
    this.display = false;
    console.log(newScore);
  }

  ngOnInit(): void {
    this.subjects = this.quizzService.getSubjectList();
  }

  userSelect(subject: QuizzSubject): void {
    this.selectedSubject = subject;
    this.finalScore = null;
    this.display = true;
  }

  getName(subject: QuizzSubject): string {
    return subject.name;
  }
}
