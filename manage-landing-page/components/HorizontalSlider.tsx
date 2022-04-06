import styles from '../styles/components/HorizontalSlider.module.scss'

import React, { ReactNode, useEffect, useState } from 'react'

interface HorizontalSliderProps {
    children: ReactNode
}

interface Pos {
    x: number,
    y: number,
    left: number,
    top: number,
}

const HorizontalSlider = ({ children }: HorizontalSliderProps): JSX.Element => {
    const [scrolling, setScrolling] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(1)

    useEffect(() => {
        setIsMobile(window.innerWidth <= 1000)
        window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000))
    }, [])

    const mouseDownHandler: React.MouseEventHandler<HTMLUListElement> = e => {
        const slider = e.target as Element

        const pos: Pos = {
            x: e.clientX,
            y: e.clientY,
            left: slider.scrollLeft,
            top: slider.scrollTop,
        }

        // Set scrolling for styling
        setScrolling(true)

        // Updates the scrolling based on mouse movement
        const mouseMoveHandler = (e: MouseEvent) => {
            const dx = e.clientX - pos.x
            const dy = e.clientY - pos.y

            slider.scrollLeft = pos.left - dx
            slider.scrollTop = pos.top - dy
        }

        // Stop scrolling
        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);

            setScrolling(false)
        }

        // Listens to mouse move and up
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }

    const touchStartHandler: React.TouchEventHandler<HTMLUListElement> = e => {
        const slider = e.target as Element

        const pos: Pos = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            left: slider.scrollLeft,
            top: slider.scrollTop,
        }

        // Set scrolling for styling
        setScrolling(true)

        const scrollIntoView = (i: number) => {
            const item = slider.querySelectorAll('.carouselItem')[i]
            const desired = i * item.clientWidth + i * parseInt(window.getComputedStyle(slider).gap.replace(/[a-zA-Z]+/, ''))

            slider.scrollLeft = desired

            setCurrent(i)
        }

        // Updates the scrolling based on touch
        const touchMoveHandler = (e: TouchEvent) => {
            const dx = e.touches[0].clientX - pos.x
            const dy = e.touches[0].clientY - pos.y

            slider.scrollLeft = pos.left - dx
            slider.scrollTop = pos.top - dy
        }

        // Stop scrolling
        const touchEndHandler = () => {
            document.removeEventListener('touchmove', touchMoveHandler);
            document.removeEventListener('touchend', touchEndHandler);

            let closest = 0
            let minDiff = Infinity

            React.Children.forEach(children, (_, i) => {
                const item = slider.querySelectorAll('.carouselItem')[i]
                const itemPos = i * item.clientWidth + i * parseInt(window.getComputedStyle(slider).gap.replace(/[a-zA-Z]+/, ''))

                const diff = Math.abs(itemPos - slider.scrollLeft)
                if (diff < minDiff) {
                    minDiff = diff
                    closest = i
                }
            })

            scrollIntoView(closest)

            setScrolling(false)
        }

        // Listens to mouse move and up
        document.addEventListener('touchmove', touchMoveHandler);
        document.addEventListener('touchend', touchEndHandler);
    }

    const classes = `${styles.slider} ${scrolling ? styles.scrolling : ''}`

    return (
        <div className={styles.container}>
            <ul onMouseDown={mouseDownHandler}
                onTouchStart={touchStartHandler}
                className={classes}   // Adds a scrolling class when scrolling
            >
                {React.Children.map(children, (child, i) => (
                    <li className="carouselItem" key={i}>{child}</li>
                ))}
            </ul>

            {isMobile
                ? (
                    <ul className={styles.dots}>
                        {React.Children.map(children, (_, i) => (
                            <li key={i} className={`${styles.dot} ${current === i ? styles.current : ''}`}></li>
                        ))}
                    </ul>
                )
                : <></>
            }

        </div>
    )
}

export default HorizontalSlider