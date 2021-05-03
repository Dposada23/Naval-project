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
      question: 'Do you have any illness or any symptoms of ilness?',
      answer:[
      {option: 'No', correct: true },
      {option: 'Slightly ill', correct: false },
      {option: 'Yes', correct: false },
        ]
      },
      {
      question: 'Are you taking any prescription or over-the-counter drugs?',
      answer:[
      {option: 'Yes', correct: true },
      {option: 'No', correct: false },
        ]
      },
      {
        question: 'When was the last time you flew?',
        answer:[
        {option: 'Yesterday', correct: true },
        {option: 'This is my first time', correct: false },
        {option: 'A couple hours ago', correct: false },
        {option: 'Last month', correct: false }
          ]
        },
        {
      question: 'How did you sleep?',
      answer:[
      {option: '8 + hours', correct: true },
      {option: 'No sleep', correct: false },
      {option: '3 hours', correct: false },
      {option: '4-7 hours', correct: false }
        ]
      },
      {
        question: 'When was the last time you ate ?',
        answer:[
        {option: '10 minutes ago', correct: true },
        {option: '4 hours ago', correct: false },
        {option: '1 day ago', correct: false },
        {option: '2 days ago', correct: false }
          ]
        },
        {
          question: 'Are you under any psychological pressure from the job? Worried about financial matters, health problems, or family discord?',
          answer:[
          {option: 'Im going through a divorce', correct: false },
          {option: 'I feel slightly stressed', correct: true },
          {option: 'I had a recent death in my family', correct: false },
          {option: 'I feel great', correct: true }
            ]
          },
      {
        question: 'How is your day going?',
        answer:[
        {option: 'I cant seem to do anything right', correct: false },
        {option: 'Im having a great day', correct: true },
        {option: 'Very annoyed with people', correct: false },
        {option: 'Its alright I just want to go home', correct: false }
          ]
        },
        {
          question: 'How did your last flight go?',
          answer:[
          {option: 'Terrible', correct: false },
          {option: 'I could have done some things better', correct: true },
          {option: 'It went great', correct: true },
          {option: 'I had to eject', correct: false }
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
