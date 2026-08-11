'use client'

import React from 'react'
import IconButton from '../homeButton'

const quizComponents = {
    question: 'text?',
    option1: 'opt1',
    option2: 'opt2',
    option3: 'opt3'
}

export default function Quiz() {
    return (
        <main className="bg-gray-800 h-full w-full absolute">
            <div>
                <IconButton/>
                <p className="text-2xl mt-[10%] py-3 border-b-2 border-solid border-amber-500 text-center mx-[30%]">{quizComponents.question}</p>
            </div>
            <div className="grid grid-rows-3 gap-3 my-[3%] text-center mx-[30%]">
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800">
                    {quizComponents.option1}
                </div>
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800">
                    {quizComponents.option2}
                </div>
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-5 duration-100 hover:cursor-pointer hover:duration-100 hover:bg-slate-800">
                    {quizComponents.option3}
                </div>
            </div>
            <div className="my-[20%]">

            </div>
        </main>
    );
}
