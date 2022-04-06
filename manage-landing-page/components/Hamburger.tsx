import styles from "../styles/components/Hamburger.module.scss"

import { ReactNode, useEffect, useState } from "react"
import Image from "next/image"

interface HamburgerProps {
    children: ReactNode
}

const Hamburger = ({ children }: HamburgerProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false)

    const handleClick = () => {
        setActive(!active)
    }

    // Cant scroll when hamburger is open
    document.body.style.overflow = active ? 'hidden' : 'auto';

    return (
        <div className={styles.hamburger}>
            <div className={styles.buttonContainer}>
                <button onClick={handleClick} className={styles.button}>
                    {active
                        ? <Image src="/images/icon-close.svg" width="21" height="22" layout="responsive" />
                        : <Image src="/images/icon-hamburger.svg" width="25" height="18" layout="responsive" />
                    }
                </button>
            </div>

            {active
                ? <>
                <nav className={styles.nav}>
                    {children}
                </nav>
                <span className={styles.modal}></span>
                </>
                : <></>
            }
        </div>
    )
}

export default Hamburger