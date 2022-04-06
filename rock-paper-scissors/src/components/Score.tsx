import { FC } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container: {
        padding: '0.25rem 2.5rem',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        background: 'white',
        borderRadius: '0.5rem'
    },

    title: {
        color: 'var(--score-text)',
        fontSize: '0.9rem',
        letterSpacing: '0.1rem',
    },
    
    score: {
        color: 'var(--dark-text)',
        fontWeight: 'bold',
        fontSize: '3rem'
    }
})

interface ScoreProps {
    score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>SCORE</h3>
            <span className={styles.score}>{score}</span>
        </div>
    )
}

export default Score