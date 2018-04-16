import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHandlerComponent } from './question-handler.component';

describe('QuestionHandlerComponent', () => {
  let component: QuestionHandlerComponent;
  let fixture: ComponentFixture<QuestionHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
