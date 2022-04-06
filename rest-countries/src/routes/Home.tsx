import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    const [countries, setCountries] = useState<any>([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    const numberFormatter = new Intl.NumberFormat()

    useEffect(() => {
        // Add a expiration date to he stored data
        const localCountries = localStorage.getItem('countries')

        if (!localCountries) {
            fetch('https://restcountries.com/v2/all').then(res => {
                res.json().then(json => {
                    localStorage.setItem('countries', JSON.stringify(json))
                    setCountries(json)
                })
            })
        } else {
            setCountries(JSON.parse(localCountries))
        }
    }, [])

    return (
        <main className="mx-auto w-11/12 py-9">
            <div className="flex justify-between flex-col gap-6 md:flex-row mb-8">
                <form
                    className="w-full"
                    onSubmit={e => {
                        e.preventDefault()

                        const data = new FormData(e.currentTarget)
                        const search = data.get('search')

                        setSearch(search ? search.toString() : '')
                    }}>
                    <label htmlFor="search" className="text-xs flex items-center gap-3 w-full md:max-w-sm border-sm px-4 py-3 bg-white-dark-mode-text-and-light-mode-elements dark:bg-dark-blue-dark-mode-elements shadow-md">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
                        <input
                            className="w-full border-sm bg-inherit"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search for a country..."
                        />
                    </label>
                </form>

                <div className="flex flex-row md:flex-row-reverse gap-2 items-center justify-between">
                    <select
                        className="w-fit px-4 py-3 text-xs bg-white-dark-mode-text-and-light-mode-elements dark:bg-dark-blue-dark-mode-elements shadow-md"
                        name="filter"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        id="filter">
                        <option value="" disabled>Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                    {filter !== ''
                        ? <button className="pr-2" onClick={() => setFilter('')}>X</button>
                        : <></>}
                </div>
            </div>

            <ul className="grid gap-16  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {countries
                    .filter((country: any) =>
                        (filter === '' || country.region.toLowerCase() === filter) &&
                        (search === '' || country.name.toLowerCase().includes(search.toLocaleLowerCase()))
                    )
                    .map((country: any) => (
                        <li className="bg-white-dark-mode-text-and-light-mode-elements w-full max-w-[300px] dark:bg-dark-blue-dark-mode-elements shadow-md rounded-sm overflow-hidden" key={country.name}>
                            <Link to={`details/${country.name.toLowerCase()}`}>
                                <div className="w-full h-36">
                                    <img className="w-full h-full" src={country.flags.png} alt={country.name + ' flag'} />
                                </div>
                                <div className="flex flex-col gap-2 p-6 pt-4 pb-8">
                                    <h2 className="font-extrabold">{country.name}</h2>
                                    <div>
                                        <div className="font-light"><span className="font-semibold">Population: </span>{numberFormatter.format(country.population)}</div>
                                        <div className="font-light"><span className="font-semibold">Region: </span>{country.region}</div>
                                        <div className="font-light"><span className="font-semibold">Capital: </span>{country.capital}</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </main>
    )
}