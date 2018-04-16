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
export class QuizzServiceMock {
  constructor() {
  }

  getSubjectById(id: number): QuizzSubject {
    return this.getSubjectList()[id]
  }

  getSubjectList(): QuizzSubject[] {
    return [
      {
        name: 'Javascript',
        questions: [
          'Le mot clé this représente',
          'Quelle est la différence entre let et var',
          'Quelle est la différence entre un lambda function et un arrow function'
        ],
        responses: [
          {
            questionId: 0,
            possibilities: [
              `L'objet fonction lui-même`,
              `L'objet qui contient la fonction`,
              'Un objet de context (window par défaut)'
            ],
            correctValue: 2
          },
          {
            questionId: 1,
            possibilities: [
              `Aucune`,
              `var est scopé au niveau de la fonction, let est scopé au niveau du bloc`,
              `var est de l'ES5, let est de l'ES6`
            ],
            correctValue: 1
          },
          {
            questionId: 2,
            possibilities: [
              `Réponse 1`,
              `Réponse 2`,
              `Réponse 3`
            ],
            correctValue: 0
          }
        ]
      },
      {
        name: 'HTML 5',
        questions: [
          'Question 1 HTML5',
          'Question 2 HTML5',
          'Question 3 HTML5'
        ],
        responses: [
          {
            questionId: 0,
            possibilities: [
              `L'objet fonction lui-même`,
              `L'objet qui contient la fonction`,
              'Un objet de context (window par défaut)'
            ],
            correctValue: 2
          },
          {
            questionId: 1,
            possibilities: [
              `Aucune`,
              `var est scopé au niveau de la fonction, let est scopé au niveau du bloc`,
              `var est de l'ES5, let est de l'ES6`
            ],
            correctValue: 1
          },
          {
            questionId: 2,
            possibilities: [
              `Réponse 1`,
              `Réponse 2`,
              `Réponse 3`
            ],
            correctValue: 0
          }
        ]
      },
      {
        name: 'Angular',
        questions: [
          'Question 1 Angular',
          'Question 2 Angular',
          'Question 3 Angular'
        ],
        responses: [
          {
            questionId: 0,
            possibilities: [
              `L'objet fonction lui-même`,
              `L'objet qui contient la fonction`,
              'Un objet de context (window par défaut)'
            ],
            correctValue: 2
          },
          {
            questionId: 1,
            possibilities: [
              `Aucune`,
              `var est scopé au niveau de la fonction, let est scopé au niveau du bloc`,
              `var est de l'ES5, let est de l'ES6`
            ],
            correctValue: 1
          },
          {
            questionId: 2,
            possibilities: [
              `Réponse 1`,
              `Réponse 2`,
              `Réponse 3`
            ],
            correctValue: 0
          }
        ]
      }
    ];
  }
}
