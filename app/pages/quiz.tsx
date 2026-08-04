import React from 'react'
import IconButton from './homeButton'

const quizComponents = {
    question: 'text?',
    option1: 'opt1',
    option2: 'opt2',
    option3: 'opt3'
}

function Quiz() {
    return (
        <main>
            <div>
                <IconButton/>
                <p className="text-2xl py-3 border-b-2 border-solid border-amber-500 mx-[10%]">{quizComponents.question}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-2">
                    {quizComponents.option1}
                </div>
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-2">
                    {quizComponents.option2}
                </div>
                <div className="rounded-xl border-solid border-2 border-gray-100 bg-slate-700 py-2">
                    {quizComponents.option3}
                </div>
            </div>
        </main>
    );
}

export default Quiz;