import Hamburger from "./Hamburger"
import LinkButton from "./LinkButton"

import styles from "../styles/components/Header.module.scss"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const Header = (): JSX.Element => {
    const [mobile, setMobile] = useState<boolean>(false)

    useEffect(() => {
        setMobile(window.innerWidth < 1000)
        window.addEventListener('resize', () => setMobile(window.innerWidth < 1000))
    }, [])

    const links = [
        <Link key="0" href="/"><a className={styles.link}>Pricing</a></Link>,
        <Link key="2" href="/"><a className={styles.link}>Product</a></Link>,
        <Link key="3" href="/"><a className={styles.link}>About Us</a></Link>,
        <Link key="4" href="/"><a className={styles.link}>Careers</a></Link>,
        <Link key="5" href="/"><a className={styles.link}>Community</a></Link>,
    ]

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image layout="fixed" src="/images/logo.svg" width="146" height="24" />
            </div>

            {mobile
                ? <div className={styles.hamburgerContainer}>
                    <Hamburger>
                        {links}
                    </Hamburger>
                </div>
                : <>
                    <nav className={styles.nav}>{links}</nav>
                    <div className={styles.buttonContainer}>
                        <LinkButton href="/">Get Started</LinkButton>
                    </div>
                </>
            }
        </header>
    )
}

export default Header