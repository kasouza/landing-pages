import React, { useState } from "react"

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export default function EmailForm() {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')

    const errorClasses = error !== '' ? 'border-soft-red' : 'border-transparent'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (email === '') {
            setError('Whoops, Email cannot be empty!')
            e.preventDefault()

        } else if (!emailRegex.test(email)) {
            setError('Whoops, make sure it\'s an valid email')
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full md:w-11/12">
            <div className="relative w-full">
                <input
                    className={`flex-1 w-full px-2 py-3 rounded-md text-very-dark-blue outline-none border-2 ${errorClasses}`}
                    type="text"
                    placeholder="Enter your email address"
                    aria-label="email address"
                    value={email}
                    onChange={e => {
                        setError('')
                        setEmail(e.target.value)
                    }}
                />
                {error !== ''
                    ? <>
                        <img className="absolute right-4 top-1/2 -translate-y-1/2" src="/images/icon-error.svg" alt="Error" />
                        <span className="absolute w-full font-medium top-full left-0 whitespace-nowrap bg-soft-red text-xs italic text-left pl-2 py-1 -my-1 rounded-md">{error}</span>
                    </>
                    : <></>
                }
            </div>

            <button className="bg-soft-red px-6 py-3 whitespace-nowrap font-medium rounded-md outline-soft-red outline-2 hover:outline hover:text-soft-red hover:bg-white text-white transition-colors" type="submit">Contact Us</button>
        </form>
    )
}