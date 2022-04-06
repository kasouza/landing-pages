import styles from "../styles/components/LinkButton.module.scss"

import Link from "next/link"
import { ReactNode } from "react"

interface LinkButtonProps {
    href: string | URL,
    children?: ReactNode,
    white?: boolean,
}

const LinkButton = ({ href, children, white = false }: LinkButtonProps): JSX.Element => {
    return (
        <Link href={href}><a className={styles.link + ' ' + (white ? styles.white : '')}>{children}</a></Link>
    )
}

export default LinkButton