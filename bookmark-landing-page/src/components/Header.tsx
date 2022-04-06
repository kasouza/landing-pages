import { useState } from "react"
import Hamburger from "./Hamburger"

export default function Header(): JSX.Element {
    const [hamburgerActive, setHamburgerActive] = useState(false)

    const links = [
        <a key="0" className="hover:text-soft-red transition-colors text-xs" href="">FEATURES</a>,
        <a key="1" className="hover:text-soft-red transition-colors text-xs" href="">PRICING</a>,
        <a key="2" className="hover:text-soft-red transition-colors text-xs" href="">CONTACT</a>,
        <a key="3" className="text-xs px-7 py-2.5 font-medium shadow-lg rounded-md bg-soft-red outline-soft-red outline-2 hover:outline  hover:text-soft-red hover:bg-transparent text-white transition-colors" href="/">LOGIN</a>
    ]

    return (
        <header className="relative w-full flex items-center justify-between py-12 px-8 md:px-32">
            <img
                className="z-40"
                src={hamburgerActive
                    ? '/images/logo-bookmark-white.svg'
                    : '/images/logo-bookmark.svg'
                }
                alt="Bookmark"
            />

            <div className="tracking-widest">
                <Hamburger active={hamburgerActive} setActive={setHamburgerActive}>
                    <a key="0" className="border-t border-opacity-20 w-10/12 mx-auto py-4 border-white text-2xl" href="">FEATURES</a>
                    <a key="1" className="border-t border-opacity-20 w-10/12 mx-auto py-4 border-white text-2xl" href="">PRICING</a>
                    <a key="2" className="border-y border-opacity-20 w-10/12 mx-auto py-4 mb-4 border-white text-2xl" href="">CONTACT</a>
                    <a key="3" className="border-white border-2 w-10/12 mx-auto text-2xl py-2.5 font-medium rounded-md text-white transition-colors" href="/">LOGIN</a>
                </Hamburger>
            </div>

            {/* <nav className="flex items-center justify-center gap-10 text-base tracking-widest">
                {links}
            </nav> */}
        </header>
    )
}