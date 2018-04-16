/**
 * Created by jean-marc on 12/04/2018.
 * @module QuizzModel
 */
import { Injectable } from "@angular/core";

export interface QuizzSubject {
  name: string;
  questions: string[];
  responses: QuizzResponse[]
}

export interface QuizzResponse {
  questionId: number;
  possibilities: string[];
  correctValue: number
}


@Injectable()
export class QuizzService {

  constructor() {}

  getSubjectById(id: number): QuizzSubject {
    return null
  }

  getSubjectList(): QuizzSubject[] {
    return null
  }
}
