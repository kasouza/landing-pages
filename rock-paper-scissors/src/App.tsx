import Rules from './components/Rules'
import Score from './components/Score'

import { FC, useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Game from './components/Game'

const useStyles = createUseStyles({
  App: {
    background: 'var(--radial-gradient)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    minHeight: '100vh',
  },

  header: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media screen and (max-width: 800px)': {
      paddingBottom: '4rem',
    }
  },

  innerHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: '1.25rem',
    border: '3px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '0.5rem',

    width: '100%',
    maxWidth: '650px',

    '@media screen and (max-width: 400px)': {
      '& img': {
        width: '40%',
      }
    }
  },

  gameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    width: '100%',
  }
})

const App: FC = () => {
  const styles = useStyles()

  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(parseInt(localStorage.getItem('score')  || '0'))
  }, [])

  useEffect(() => {
    localStorage.setItem('score', score.toString())  
  }, [score])

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <img src="/images/logo.svg" alt="Rock Paper Scissors" />

          <Score score={score} />
        </div>
      </header>

      <main>
        <div className={styles.gameContainer}>
          <Game score={score} setScore={setScore} />
        </div>
      </main>

      <footer className={styles.footer}>
        <Rules />
      </footer>
    </div>
  );
}

export default App
