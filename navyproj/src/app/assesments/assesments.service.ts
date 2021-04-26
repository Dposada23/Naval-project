import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class AssesmentsService {
quizzes: Quiz[] = [
  {
  question: 'How are you feeling today?',
  answer:[
    {option: 'Happy', correct: true },
    {option: 'Sad', correct: false },
    {option: 'Nervous', correct: false },
    {option: 'Stressed', correct: false }
      ]
    },
    {
    question: 'How are you feeling today?',
    answer:[
    {option: 'Happy', correct: true },
    {option: 'Sad', correct: false },
    {option: 'Nervous', correct: false },
    {option: 'Stressed', correct: false }
      ]
    },
    {
      question: 'How are you feeling today?',
      answer:[
      {option: 'Happy', correct: true },
      {option: 'Sad', correct: false },
      {option: 'Nervous', correct: false },
      {option: 'Stressed', correct: false }
        ]
      },
      {
        question: 'How are you feeling today?',
        answer:[
        {option: 'Happy', correct: true },
        {option: 'Sad', correct: false },
        {option: 'Nervous', correct: false },
        {option: 'Stressed', correct: false }
          ]
        },
        {
    question: 'How are you feeling today?',
    answer:[
    {option: 'Happy', correct: true },
    {option: 'Sad', correct: false },
    {option: 'Nervous', correct: false },
    {option: 'Stressed', correct: false }
      ]
    },
    {
      question: 'How are you feeling today?',
      answer:[
      {option: 'Happy', correct: true },
      {option: 'Sad', correct: false },
      {option: 'Nervous', correct: false },
      {option: 'Stressed', correct: false }
        ]
      },
      {
        question: 'How are you feeling today?',
        answer:[
        {option: 'Happy', correct: true },
        {option: 'Sad', correct: false },
        {option: 'Nervous', correct: false },
        {option: 'Stressed', correct: false }
          ]
        },
    {
      question: 'How are you feeling today?',
      answer:[
      {option: 'Happy', correct: true },
      {option: 'Sad', correct: false },
      {option: 'Nervous', correct: false },
      {option: 'Stressed', correct: false }
        ]
      },
      {
        question: 'How are you feeling today?',
        answer:[
        {option: 'Happy', correct: true },
        {option: 'Sad', correct: false },
        {option: 'Nervous', correct: false },
        {option: 'Stressed', correct: false }
          ]
        },
    {
      question: 'Have you consumed any alcohol in the past 24 hours?',
      answer:[
        {option: 'Just a sip', correct: false },
        {option: 'No', correct: true },
        {option: 'Yes', correct: false },
        {option: 'I had too much to drink lastnight', correct: false }
          ]
        }
  ]
  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }

}
