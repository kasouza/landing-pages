import { Dispatch, FC, SetStateAction } from "react";
import { Job } from "../pages";

import Image from "next/image";

interface CardItemProps {
    filter: string,
    filters: string[],
    setFilters: Dispatch<SetStateAction<string[]>>,
}

const CardItem: FC<CardItemProps> = ({ filter, filters, setFilters }) => {
    const handleClick = () => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter])
        }
    }

    return (
        <li>
            <button
                className="px-2.5 py-1 rounded-md md:text-sm text-desaturated-dark-cyan bg-light-grayish-cyan-background font-bold hover:bg-desaturated-dark-cyan hover:text-white transition-colors"
                onClick={handleClick}>{filter}</button>
        </li>
    )
}

const Circle: FC = () => {
    return (
        <span className="w-1 h-1 rounded-full bg-dark-grayish-cyan"></span>
    )
}

interface CardProps {
    job: Job,
    filters: string[],
    setFilters: Dispatch<SetStateAction<string[]>>,
}

const Card: FC<CardProps> = ({ job, filters, setFilters }) => {
    return (
        <div className={`flex flex-col md:flex-row  md:items-center justify-between gap-4 bg-white pt-0 p-6 md:p-8 rounded-md border-l-[0.375rem] border-solid shadow-lg tracking-wide ${job.new && job.featured ? 'border-l-desaturated-dark-cyan' : 'border-l-transparent'}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-14 md:w-24 -translate-y-1/2  md:translate-y-0 -mb-8 md:mb-0">
                    <Image src={job.logo.slice(1)} height={88} width={88} layout="responsive" />
                </div>

                <div className="flex flex-col gap-2.5 md:gap-2 border-b border-b-slate-400 border-solid md:border-none pb-4 md:pb-0">
                    <div className="flex gap-4">
                        <h3 className="text-desaturated-dark-cyan font-bold">{job.company}</h3>

                        <div className="flex items-center gap-2">
                            {job.new
                                ? <span className="tracking-wider text-white bg-desaturated-dark-cyan px-2.5 py-1 text-center text-xs rounded-xl font-bold">NEW!</span>
                                : <></>
                            }
                            {job.featured
                                ? <span className="tracking-wider text-white bg-very-dark-grayish-cyan px-2.5 py-1 text-center text-xs rounded-xl font-bold">FEATURED</span>
                                : <></>
                            }
                        </div>
                    </div>

                    <h2 className="text-very-dark-grayish-cyan  text-lg md:text-xl font-bold tracking-wider hover:text-desaturated-dark-cyan transition-colors"><a href="/">{job.position}</a></h2>

                    <div className="flex items-center w-full md:w-auto gap-2 md:gap-4 text-dark-grayish-cyan text-sm md:text-base">
                        <span className="whitespace-nowrap">{job.postedAt}</span>
                        <Circle />
                        <span className="whitespace-nowrap">{job.contract}</span>
                        <Circle />
                        <span className="whitespace-nowrap">{job.location}</span>
                    </div>
                </div>
            </div>

            <ul className="flex gap-2 flex-wrap">
                <CardItem filter={job.role} filters={filters} setFilters={setFilters} />
                <CardItem filter={job.level} filters={filters} setFilters={setFilters} />

                {job.tools.map((tool, i) => (
                    <CardItem filter={tool} filters={filters} setFilters={setFilters} key={i} />
                ))}

                {job.languages.map((language, i) => (
                    <CardItem filter={language} filters={filters} setFilters={setFilters} key={i} />
                ))}
            </ul>
        </div>
    )
}

export default Card