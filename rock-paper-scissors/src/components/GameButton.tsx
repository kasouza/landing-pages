import { FC } from 'react'
import { createUseStyles } from 'react-jss'

export enum Shape {
    Rock,
    Paper,
    Scissors,
    None,
}

interface StylesProps {
    border: string,
    background: string,
    shadowColor: string,
}

const icons = {
    [Shape.Rock]: '/images/icon-rock.svg',
    [Shape.Paper]: '/images/icon-paper.svg',
    [Shape.Scissors]: '/images/icon-scissors.svg',
    [Shape.None]: '',
}

const borders = {
    [Shape.Rock]: 'var(--rock-gradient)',
    [Shape.Paper]: 'var(--paper-gradient)',
    [Shape.Scissors]: 'var(--scissors-gradient)',
    [Shape.None]: 'transparent',
}

const shadows = {
    [Shape.Rock]: 'var(--rock-shadow)',
    [Shape.Paper]: 'var(--paper-shadow)',
    [Shape.Scissors]: 'var(--scissors-shadow)',
    [Shape.None]: 'transparent',
}

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background: (props: StylesProps) => props.border,
        borderRadius: '100%',

        width: '100%',
        height: '100%',

        boxShadow: (props: StylesProps) => `0px 8px 2px ${props.shadowColor}`,

        cursor: 'pointer',
        transition: '100ms transform ease-in-out',

        '&:hover': {
            transform: 'scale(105%)',
        }
    },

    inner: {
        boxShadow: '0px 6px 2px rgba(0, 0, 0, 0.2) inset',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background: (props: StylesProps) => props.background,

        width: '75%',
        height: '75%',

        borderRadius: '100%',
    },

    icon: {
        width: '45%'
    }
})

interface GameButtonProps {
    shape: Shape,
    onClick?: (shape: Shape) => void
}

const GameButton: FC<GameButtonProps> = ({ shape, onClick = () => { } }) => {
    const styles = useStyles({
        border: borders[shape],
        background: shape === Shape.None ? 'var(--dark-text)' : 'hsl(255, 100%, 97%)',
        shadowColor: shadows[shape]
    })

    return (
        <button className={styles.container} onClick={() => onClick(shape)}>
            <div className={styles.inner}>
                {shape !== Shape.None
                    ? <img className={styles.icon} src={icons[shape]} alt={shape.toString()} />
                    : <></>
                }
            </div>
        </button>
    )
}

export default GameButton