import { useState } from "react"

interface QuestionProps {
    question: { q: string, a: string },
}

function Question({ question }: QuestionProps): JSX.Element {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div>
            <div onClick={() => setActive(!active)} className={`flex justify-between items-center cursor-pointer hover:text-soft-red transition-colors`}>
                <span className="text-lg">{question.q}</span>
                <img className={`${active ? 'animate-arrow' : ''}`} src="/images/icon-arrow.svg" alt="Down Arrow" />
            </div>
            {active
                ? <div className={`mt-4 text-grayish-blue ${active ? 'animate-show' : ''}`}>{question.a}</div>
                : <></>
            }
        </div>
    )
}

interface FaqProps {
    questions: { q: string, a: string }[]
}

export default function Faq({ questions }: FaqProps): JSX.Element {
    return (
        <ul className="border-t border-t-gray-200 w-full">
            {questions.map((question, i) => (
                <li className="border-b border-b-gray-200 py-5" key={i}>
                    <Question question={question} />
                </li>
            ))}
        </ul>
    )
}