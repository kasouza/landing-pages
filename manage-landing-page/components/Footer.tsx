import UpdatesForm from "./UpdatesForm"

import styles from "../styles/components/Footer.module.scss"

import Image from "next/image"
import Link from "next/link"

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Image layout="responsive" src="/images/logo-white.svg" width="146" height="24" />
            </div>

            <ul className={styles.socialIcons}>
                <li>
                    <a className={styles.icon} href="">
                        <Image src="/images/icon-facebook.svg" width={20} height={20} layout="responsive" />
                    </a>
                </li>
                <li>
                    <a className={styles.icon} href="">
                        <Image src="/images/icon-youtube.svg" width={20} height={20} layout="responsive" />
                    </a>

                </li>
                <li>
                    <a className={styles.icon} href="">
                        <Image src="/images/icon-twitter.svg" width={20} height={20} layout="responsive" />
                    </a>

                </li>
                <li>
                    <a className={styles.icon} href="">
                        <Image src="/images/icon-pinterest.svg" width={20} height={20} layout="responsive" />
                    </a>

                </li>
                <li>
                    <a className={styles.icon} href="">
                        <Image src="/images/icon-instagram.svg" width={20} height={20} layout="responsive" />
                    </a>
                </li>
            </ul>

            <div className={styles.linksContainer}>
                <ul className={styles.col}>
                    <li>
                        <Link href=""><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Pricing</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Products</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>About Us</a></Link>
                    </li>
                </ul>

                <ul className={styles.col}>
                    <li>
                        <Link href=""><a>Careers</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Community</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Privacy Policy</a></Link>
                    </li>
                </ul>
            </div>

            <div className={styles.updateFormContainer}>
                <UpdatesForm />
            </div>

            <p className={styles.copyright}>Copyright 2020. All Rights Reserved</p>
        </footer>
    )
}

export default Footer