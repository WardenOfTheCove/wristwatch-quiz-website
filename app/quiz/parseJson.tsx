import {useState} from 'react'
import questions from './questions.json'



export default function parseJson(questionCounter: number) {
    var quizParts = {
        question: questions[questionCounter].question,
        option1: questions[questionCounter].options[0],
        option2: questions[questionCounter].options[1],
        option3: questions[questionCounter].options[2]
    };
    return quizParts;
}