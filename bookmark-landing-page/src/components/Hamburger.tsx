import { ReactNode, useEffect, useState } from "react"

type setActiveCb = {
    (active: boolean): void,
}

interface HamburgerProps {
    children: ReactNode,
    active: boolean,
    setActive: setActiveCb
}

const Hamburger = ({ children, active, setActive }: HamburgerProps): JSX.Element => {
    const handleClick = () => {
        setActive(!active)
    }

    // Cant scroll when hamburger is open
    document.body.style.overflow = active ? 'hidden' : 'auto';

    return (
        <div>
            {active
                ? <div className="flex flex-col items-center justify-start z-10 absolute w-screen h-[calc(100vh+100%)] left-0 top-0 bg-opacity-90 bg-very-dark-blue">
                    <button onClick={handleClick}>
                        <img className="absolute right-8 top-12" src="/images/icon-close.svg" />
                    </button>

                    <nav className="mt-32 flex w-full flex-col text-white text-center">
                        {children}
                    </nav>
                    
                    <ul className="mt-32 flex gap-10 justify-center lg:justify-start items-center">
                        <li><a className="social-icon" href=""><img src="/images/icon-facebook.svg" alt="Facebook" /></a></li>
                        <li><a className="social-icon" href=""><img src="/images/icon-twitter.svg" alt="Twitter" /></a></li>
                    </ul>
                </div>
                : <button onClick={handleClick}>
                    <img src="/images/icon-hamburger.svg" />
                </button>
            }


        </div>
    )
}

export default Hamburger