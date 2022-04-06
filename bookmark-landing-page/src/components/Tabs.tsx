import { useState } from "react"

interface TabsProps {
    tabs: { name: string, title: string, text: string, imgSrc: string, imgAlt: string }[]
}

export default function Tabs({ tabs }: TabsProps): JSX.Element {
    const [current, setCurrent] = useState<number>(0)

    const tab = tabs[current]

    return (
        <div className="w-full">
            <div className="w-1/2 mx-auto mb-16">
                <ol className="flex flex-col lg:flex-row justify-around text-center lg:gap-4 mx-auto mb-4">
                    {tabs.map((tab, i) => (
                        <li className={`first:border-t border-b lg:border-none flex-1 font-medium ${current === i ? 'text-very-dark-blue' : 'text-grayish-blue'}`} key={i}>
                            <button className={`py-2 lg:py-0 hover:text-soft-red transition-colors lg:border-none border-b-2 ${current === i ? 'border-soft-red' : 'border-transparent'}`} onClick={() => setCurrent(i)}><h3>{tab.name}</h3></button>
                        </li>
                    ))}
                </ol>

                <ol className="hidden lg:flex h-1 border-b border-grayish-blue justify-center mx-auto rounded-lg overflow-hidden">
                    {tabs.map((_, i) => (
                        <li className={`flex-1 h-full w-full ${current === i ? 'bg-soft-red' : ''}`} key={i}>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="flex items-center flex-col lg:flex-row gap-16">
                <img className="max-w-[500px] flex-1 mx-auto lg:mx-0 w-10/12 lg:w-auto lg:pl-32" src={tab.imgSrc} alt={tab.imgAlt} />

                <div className="flex-1 flex items-center flex-col justify-center gap-4 lg:gap-8 lg:max-w-1/2 min-h-full text-center lg:text-left">
                    <h3 className="text-3xl font-medium">{tab.title}</h3>

                    <p className="text-lg text-grayish-blue w-10/12 lg:w-auto lg:max-w-lg">{tab.text}</p>

                    <a className="hidden lg:block text-sm w-fit px-7 py-3.5 font-medium bg-soft-blue text-white rounded-lg outline-soft-blue outline-2 hover:outline hover:bg-transparent hover:text-soft-blue transition-colors" href="/">More Info</a>
                </div>
            </div>
        </div>
    )
}