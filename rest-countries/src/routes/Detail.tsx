import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function Detail() {
    const params = useParams()

    const [countries, setCountries] = useState<any>()
    const [country, setCountry] = useState<any>()

    const numberFormatter = new Intl.NumberFormat()

    useEffect(() => {
        // Add a expiration date to he stored data
        const localCountries = localStorage.getItem('countries')

        if (!localCountries) {
            fetch('https://restcountries.com/v2/all').then(res => {
                res.json().then(json => {
                    localStorage.setItem('countries', JSON.stringify(json))

                    setCountries(json)
                    setCountry(json.find((country: any) => country.name.toLowerCase() === params.country))
                })
            })
        } else {
            setCountries(JSON.parse(localCountries))
            setCountry(JSON.parse(localCountries).find((country: any) => country.name.toLowerCase() === params.country))
        }
    }, [])

    const Info = ({ k, v }: { k: string, v: React.ReactNode }) => (
        <li className="font-light"><span className="font-semibold">{k}: </span>{v}</li>
    )

    if (country) {
        const currencies = Object.values(country.currencies).map(currency => (currency as any).name as string)
        const languages = country.languages.map((lang: any) => lang.name).join(', ')
        const borders = country.borders.map((border: any) => countries.find((country: any) => country.alpha3Code === border).name)

        return (
            <main className="mx-auto w-11/12 pb-32">
                <Link to="/">
                    <span className="bg-white-dark-mode-text-and-light-mode-elements dark:bg-dark-blue-dark-mode-elements block w-fit px-6 py-1 mt-9 mb-14 md:my-14 shadow-md"><FontAwesomeIcon icon={solid('arrow-left-long')}/> Back</span>
                </Link>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4 justify-between w-full">
                    <div className="w-full md:flex-1">
                        <img className="w-full md:w-10/12" src={country.flags.png} alt="" />
                    </div>

                    <div className="w-full md:flex-1">
                        <h2 className="mb-8 font-extrabold text-2xl">{country.name}</h2>

                        <div className="grid gap-8 md:gap-0 grid-cols-1 md:grid-cols-2 text-sm">
                            <ul className="flex flex-col gap-2 md:gap-0">
                                <Info k="Native Name" v={country.nativeName} />
                                <Info k="Population" v={country.population} />
                                <Info k="Region" v={country.region} />
                                <Info k="Sub Region" v={country.subregion} />
                                <Info k="Capital" v={country.capital} />
                            </ul>
                            <ul className="flex flex-col gap-2 md:gap-0">
                                <Info k="Top Level Domain" v={country.topLevelDomain} />
                                <Info k="Currencies" v={currencies} />
                                <Info k="Languages" v={languages} />
                            </ul>
                            <div className="w-full md:col-span-2 md:pt-16">
                                <span className="font-semibold">Border Countries: </span>
                                <ul className="md:pl-2 mt-4 md:mt-0 flex md:inline-flex flex-wrap gap-2">
                                    {borders.map((country: string) => (
                                        <li className="bg-white-dark-mode-text-and-light-mode-elements dark:bg-dark-blue-dark-mode-elements px-4 py-1 rounded-md  shadow-md" key={country}>{country}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        )
    }

    return <main></main>
}