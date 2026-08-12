'use client'

import React from 'react'
import IconButton from '../homeButton'
import parseJson from './parseJson'
import Link from 'next/link'


var counter = 0;
var quizComponents = parseJson(counter);
var answers: number[] = [];

function changeNextQuestion() {
    document.getElementById("question")!.innerHTML = quizComponents.question;
    document.getElementById("option1")!.innerHTML = quizComponents.option1;
    document.getElementById("option2")!.innerHTML = quizComponents.option2;
    document.getElementById("option3")!.innerHTML = quizComponents.option3;
}

function clickEvent(option: number) {
    if(counter < 5) {
        answers.push(option);
        counter += 1;
        quizComponents = parseJson(counter);
        changeNextQuestion();
    } else {
        alert("Quiz completed! Here are your answers: " + answers.join(", "));
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
            <div className="my-[20%]">

            </div>
        </main>
    );
}
