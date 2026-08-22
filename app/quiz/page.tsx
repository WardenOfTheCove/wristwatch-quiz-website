'use client'

import React from 'react'
import IconButton from '../homeButton'
import parseJson from './parseJson'
import Link from 'next/link'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

var counter: number = 0;
var quizComponents = parseJson(counter);
export var answers: number[] = [];

function changeNextQuestion() {
    document.getElementById("question")!.innerHTML = quizComponents.question;
    document.getElementById("option1")!.innerHTML = quizComponents.option1;
    document.getElementById("option2")!.innerHTML = quizComponents.option2;
    document.getElementById("option3")!.innerHTML = quizComponents.option3;
}

function arrowButtons(direction: boolean) {
    if(direction) {
        if(counter < 3) {
            counter += 1;
            quizComponents = parseJson(counter);
            changeNextQuestion();
        } else {
            window.location.href='/answer';
        }
    } else {
        if(counter === 0) {
            window.location.href = '/';
        } else {
            counter -= 1;
            quizComponents = parseJson(counter);
            while(answers.length > counter) {
                answers.pop();
            }
            changeNextQuestion();
        }
    }
}

function clickEvent(option: number) {
    if(counter < 5) {
        answers.push(option);
        counter += 1;
        quizComponents = parseJson(counter);
        changeNextQuestion();
    } else {
        answers.push(option);
        alert("Here are your answers: " + answers.join(", "));
        window.location.href='/answer';
    }
}

export default function Quiz() {
    return (
        <main className="bg-gray-800 h-full w-full absolute">
            <div>
                <IconButton/>
                <p id="question" className="text-2xl mt-[10%] py-3 border-b-2 border-solid border-amber-500 text-center mx-[30%]">{quizComponents.question}</p>
            </div>
            <div className="grid grid-rows-3 gap-3 my-[3%] text-center mx-[30%]">
                <button id="option1" className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800" onClick={() => clickEvent(1)}>
                    {quizComponents.option1}
                </button>
                <button id="option2" className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800" onClick={() => clickEvent(2)}>
                    {quizComponents.option2}
                </button>
                <button id="option3" className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800" onClick={() => clickEvent(3)}>
                    {quizComponents.option3}
                </button>
            </div>
            <div className="my-[5%] mx-[20%] text-center">
                <button className="duration-100 hover:duration-100 hover:cursor-pointer px-15" onClick={() => arrowButtons(false)}><ArrowBackIos /></button>
                <button className="duration-100 hover:duration-100 hover:cursor-pointer px-15" onClick={() => arrowButtons(true)}><ArrowForwardIos /></button>
            </div>
        </main>
    );
}
