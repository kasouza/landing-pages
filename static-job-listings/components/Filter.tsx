import { Dispatch, FC, SetStateAction } from "react";

import Image from 'next/image'

interface FilterProps {
    filters: string[],
    setFilters: Dispatch<SetStateAction<string[]>>
}

const Filter: FC<FilterProps> = ({ filters, setFilters }) => {
    // Removes this filter from the list
    const handleClick = (currentFilter: string) => {
        setFilters(filters.filter(filter => filter !== currentFilter))
    }

    return (
        <div className="flex justify-between w-11/12 md:w-4/5  h-fit mx-auto relative translate-y-1/2 rounded-md shadow-lg bg-white px-8 py-4">
            <ul className="flex gap-4 flex-wrap text-desaturated-dark-cyan font-medium text-sm items-center">
                {filters.map((filter, i) => (
                    <li className="flex items-center bg-light-grayish-cyan-background " key={i}>
                        <span className="px-2.5 py-1">{filter}</span>
                        <button
                            className="flex items-center justify-center bg-desaturated-dark-cyan w-6 h-6 hover:bg-very-dark-grayish-cyan transition-colors"
                            onClick={() => handleClick(filter)}><Image src="/images/icon-remove.svg" width={14} height={14} /></button>
                    </li>
                ))}
            </ul>
            <button onClick={() => setFilters([])} className="text-desaturated-dark-cyan font-medium text-sm hover:underline">Clear</button>
        </div>
    )
}

export default Filter