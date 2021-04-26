import { Component, OnInit } from '@angular/core';
import {AssesmentsService} from './assesments.service';
import {Quiz} from './quiz.model';
@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.css']
})
export class AssesmentsComponent implements OnInit {
  quizzes: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;

  randomize: number;
  result = false;
    constructor(private quizService: AssesmentsService) { }

    ngOnInit(): void {
      this.quizzes = this.quizService.getQuizzes();
      this.randomize = Math.floor(Math.random() * this.quizzes.length);
    }
    onAnswer(option: boolean){
      setTimeout(() => {
      this.randomize=Math.floor(Math.random() * this.quizzes.length)
      this.currentQuiz++;
      this.answerSelected = false;
      }, 1000)


      if(option){
        this.correctAnswers++;
      }else{
        this.incorrectAnswers++;
      }
    }

  showResult(){
   this.result = true;
  }
}
