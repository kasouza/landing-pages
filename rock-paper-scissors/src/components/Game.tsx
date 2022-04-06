import GameButton, { Shape } from './GameButton'

import React, { FC, useState } from 'react'
import { createUseStyles } from 'react-jss'

enum Winner {
    player,
    house,
    draw
}

const useStyles = createUseStyles({
    step1: {
        display: 'grid',
        gridTemplateAreas: '"top-left top-right" "bottom bottom"',
        justifyItems: 'center',

        marginTop: '2rem',

        columnGap: '4rem',

        width: 400,
        height: 400,

        background: 'url("/images/bg-triangle.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom 33% center',
        backgroundSize: '65%',

        '& .gameButtonContainer': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '170px',
            height: '170px',

            gridArea: 'top-right',

            '&.first': {
                gridArea: 'top-left',
            },

            '&.last': {
                gridArea: 'bottom'
            },
        },

        '@media screen and (max-width: 430px)': {
            alignContent: 'center',
            gap: '2rem',

            width: 350,

            backgroundPosition: 'bottom 43% center',

            '& .gameButtonContainer': {
                width: 135,
                height: 135,
            }
        }
    },

    step2: {
        display: 'grid',
        justifyItems: 'center',
        gap: '4rem',
        padding: '0 1rem',

        marginTop: '2rem',

        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: '"you house" "you-shape house-shape"',

        '& h2': {
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            letterSpacing: '0.2rem',
        },

        '& .you': {
            gridArea: 'you'
        },

        '& .house': {
            gridArea: 'house'
        },

        '& .gameButtonContainer': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '250px',
            height: '250px',

            '&.first': {
                gridArea: 'you-shape',
            },

            '&.last': {
                gridArea: 'house-shape'
            }
        },

        '@media screen and (max-width: 800px)': {
            gridTemplateAreas: '"you-shape house-shape" "you house"',
            gap: '2rem',

            '& h2': {
                fontSize: '1.2rem',
            },

            '& .gameButtonContainer': {
                width: '150px',
                height: '150px',
            }
        }
    },

    step3: {
        display: 'grid',
        justifyItems: 'center',
        gap: '4rem',
        padding: '0 1rem',

        marginTop: '2rem',

        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: '"you house" "you-shape house-shape"',

        '& h2': {
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            letterSpacing: '0.2rem',
        },

        '& .you': {
            gridArea: 'you'
        },

        '& .house': {
            gridArea: 'house'
        },

        '& .gameButtonContainer': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '250px',
            height: '250px',

            '&.first': {
                gridArea: 'you-shape',
            },

            '&.last': {
                gridArea: 'house-shape',
                animation: 'popup 250ms forwards'
            }
        },

        '@media screen and (max-width: 800px)': {
            gridTemplateAreas: '"you-shape house-shape" "you house"',
            gap: '2rem',

            '& h2': {
                fontSize: '1.2rem',
            },

            '& .gameButtonContainer': {
                width: '150px',
                height: '150px',
            }
        }
    },

    step4: {
        display: 'grid',
        gap: '4rem',
        padding: '0 1rem',

        marginTop: '2rem',

        gridTemplateAreas: '"you . house" "you-shape result house-shape"',

        '& h2': {
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            letterSpacing: '0.2rem',
        },

        '& .you': {
            gridArea: 'you'
        },

        '& .house': {
            gridArea: 'house'
        },

        '& .resultContainer': {
            display: 'flex',
            gap: '0.75rem',
            flexDirection: 'column',
            justifyContent: 'center',

            gridArea: 'result',

            textAlign: 'center',

            animation: 'popup 250ms forwards',

            '& .winMessage': {
                fontSize: '3rem',
                color: 'white',
            },

            '& .playAgain': {
                padding: '0.75rem 0',

                borderRadius: '0.5rem',

                color: 'hsl(349, 71%, 55%);',
                fontWeight: 600,

                letterSpacing: '0.08rem',

                cursor: 'pointer'
            }
        },

        '& .gameButtonContainer': {
            position: 'relative',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '250px',
            height: '250px',

            /* This makes the button itself appear above the winner gradient */
            '& .inner': {
                position: 'absolute',

                width: '100%',
                height: '100%',
            },

            '&.first': {
                gridArea: 'you-shape',
            },

            '&.last': {
                gridArea: 'house-shape'
            },

            '&.winner::before': {
                content: '""',

                position: 'absolute',
                width: '70vmin',
                height: '70vmin',

                background: 'radial-gradient(circle, rgba(255,255, 255, 0.09) 0%, rgba(255,255, 255, 0.09) 43%, rgba(255,255, 255, 0.06) 44%, rgba(255,255, 255, 0.06) 55%, rgba(255,255, 255, 0.03) 56%)',
                borderRadius: '100%',
            }
        },

        '@media screen and (max-width: 800px)': {
            gridTemplateColumns: '1fr 1fr',
            gridTemplateAreas: '"you-shape house-shape" "you house" "result result"',
            justifyItems: 'center',

            gap: '2rem',

            ':root': {
                overflow: 'hidden',
            },

            '& h2': {
                fontSize: '1.2rem',
            },

            '& .gameButtonContainer': {
                width: '150px',
                height: '150px',
            },

            '& .resultContainer': {
                paddingTop: '2rem',

                '& .winMessage': {
                    fontSize: '4.5rem !important',
                },

                '& .playAgain': {
                    padding: '1.25rem 4rem !important',
                    fontSize: '1.2rem',
                    color: 'var(--dark-text) !important'
                }
            }
        }
    },
})

interface GameProps {
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>
}

function randomShape(): Shape {
    const rand = Math.floor(Math.random() * 3)
    return rand as Shape
}

function checkWinner(playerShape: Shape, houseShape: Shape): Winner {
    if (playerShape == houseShape) {
        return Winner.draw
    }

    if (playerShape === Shape.Rock && houseShape === Shape.Scissors
        || playerShape === Shape.Paper && houseShape === Shape.Rock
        || playerShape === Shape.Scissors && houseShape === Shape.Paper) {
        return Winner.player

    }

    return Winner.house
}

const Game: FC<GameProps> = ({ score, setScore }) => {
    const styles = useStyles()

    const [step, setStep] = useState(4)
    const [playerShape, setPlayerShape] = useState(Shape.Paper)
    const [houseShape, setHouseShape] = useState(Shape.Rock)

    const handleClick = (newPlayerShape: Shape) => {
        setPlayerShape(newPlayerShape)
        setStep(2)

        setTimeout(() => {
            const newHouseShape = randomShape()
            setHouseShape(newHouseShape)

            const winner = checkWinner(newPlayerShape, newHouseShape)

            switch (winner) {
                case Winner.player:
                    setScore(score + 1)
                    break;
                case Winner.house:
                    setScore(Math.max(score - 1, 0))
                    break;
            }

            setStep(3)

            setTimeout(() => {
                setStep(4)
            }, 500)
        }, 1000)
    }

    const winner = checkWinner(playerShape, houseShape)

    let winMessage = ''
    if (winner === Winner.player) {
        winMessage = 'YOU WIN'
    } else if (winner === Winner.house) {
        winMessage = 'YOU LOSE'
    } else {
        winMessage = 'DRAW'
    }


    const steps = [(
        <div className={styles.step1}>
            <div className="gameButtonContainer first">
                <GameButton shape={Shape.Paper} onClick={handleClick} />
            </div>

            <div className="gameButtonContainer">
                <GameButton shape={Shape.Scissors} onClick={handleClick} />
            </div>

            <div className="gameButtonContainer last">
                <GameButton shape={Shape.Rock} onClick={handleClick} />
            </div>
        </div>),
    (
        <div className={styles.step2}>
            <h2 className="you">YOU PICKED</h2>
            <h2 className="house">THE HOUSE PICKED</h2>

            <div className="gameButtonContainer first">
                <GameButton shape={playerShape} />
            </div>

            <div className="gameButtonContainer last">
                <GameButton shape={Shape.None} />
            </div>
        </div>
    ),
    (
        <div className={styles.step3}>
            <h2 className="you">YOU PICKED</h2>
            <h2 className="house">THE HOUSE PICKED</h2>

            <div className="gameButtonContainer first">
                <GameButton shape={playerShape} />
            </div>

            <div className="gameButtonContainer list">
                <GameButton shape={houseShape} />
            </div>
        </div>
    ),
    <div className={styles.step4}>
        <h2 className="you">YOU PICKED</h2>
        <h2 className="house">THE HOUSE PICKED</h2>

        <div className={`gameButtonContainer first ${winner === Winner.player ? 'winner' : ''}`}>
            <div className="inner">
                <GameButton shape={playerShape} />
            </div>
        </div>

        <div className="resultContainer">
            <span className="winMessage">{winMessage}</span>
            <button onClick={() => setStep(1)} className="playAgain">PLAY AGAIN</button>
        </div>

        <div className={`gameButtonContainer last ${winner === Winner.house ? 'winner' : ''}`}>
            <div className="inner">
                <GameButton shape={houseShape} />
            </div>
        </div>
    </div>
    ]

    return steps[step - 1]
}

export default Game