import { Component, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { QuizzService, QuizzSubject } from '../services/quizz.service';
import { Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-question-handler',
  templateUrl: './question-handler.component.html',
  styleUrls: ['./question-handler.component.css']
})
export class QuestionHandlerComponent implements OnChanges, OnInit {

  questionIndex: number = 0;
  private correctResponses: boolean[] = [];
  subject: QuizzSubject = null;


  @Output() returnScore: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _quizzService: QuizzService, private _route: ActivatedRoute) {
  }

  o$ = new Subject();


  ngOnChanges() {
    this.questionIndex = 0;
    this.correctResponses = [];
  }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this.subject = this._quizzService.getSubjectById(id);
    this.o$.next(this.subject);
    console.log(this.subject);
  }


  getScore(): string {
    const nbOK = this.correctResponses.filter(value => value);
    return `${nbOK.length}/${this.subject.questions.length}`;
  }

  isQuizzDone(): boolean {
    let temp = this.questionIndex;
    temp++;
    return temp === this.subject.questions.length;
  }

  userSelectedAnswer(responseIndex: number, response: { correctValue: number }) {
    this.correctResponses.push(response.correctValue === responseIndex);
    this.o$.next();
    this.isQuizzDone() ? this.returnScore.emit(this.getScore()) : this.questionIndex++;
  }

}
