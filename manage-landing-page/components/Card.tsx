import Image from "next/image"

import styles from "../styles/components/Card.module.scss"

interface CardProps {
    imageSrc: string,
    imageWidth: number,
    imageHeight: number,
    title: string,
    text: string,
}

const Card = ({ imageSrc, imageWidth, imageHeight, title, text }: CardProps): JSX.Element => (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <Image src={imageSrc} width={imageWidth} height={imageHeight} layout="responsive" />
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
    </div>
)

export default Card