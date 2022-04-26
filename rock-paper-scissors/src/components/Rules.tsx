import { FC, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        padding: '2rem',
        paddingTop: '0',

        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',

        '@media screen and (max-width: 800px)': {
            paddingTop: '4rem',
            justifyContent: 'center',
        }
    },

    button: {
        position: 'absolute',
        bottom: '2rem',
        letterSpacing: '0.1rem',
        fontWeight: 700,
        fontSize: '.75rem',
        padding: '0.6rem 2rem',

        background: 'none',
        color: 'white',

        border: '2px solid rgba(255, 255, 255, .5)',
        borderRadius: '.6rem',

        cursor: 'pointer',
        transition: '150ms transform',

        '&:hover': {
            transform: 'scale(105%)'
        },

        '@media screen and (max-width: 800px)': {
            fontSize: '1.2rem',
            padding: '1rem 3rem',
        }
    },

    modalContainer: {
        position: 'absolute',

        top: 0,
        left: 0,

        width: '100%',
        height: '100%',

        background: 'rgba(0, 0, 0, 0.7)',

        '& .modal': {
            padding: '1.5rem',
            position: 'absolute',

            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateAreas: '"title close" "rules rules"',
            rowGap: '2rem',

            background: 'white',

            borderRadius: '.6rem',

            '& .title': {
                color: 'var(--dark-text)',
                gridArea: 'title'
            },

            '& .closeContainer': {
                display: 'flex',
                justifyContent: 'flex-end',
                gridArea: 'close',

                '& .close': {
                    cursor: 'pointer',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    background: 'none',

                    transition: '150ms',

                    '&:hover': {
                        transform: 'scale(110%)',
                        filter: 'brightness(0.1)'
                    }
                }
            },

            '& .rules': {
                gridArea: 'rules',
            },

            '@media screen and (max-width: 800px)': {
                gridTemplateColumns: 'unset',
                gridTemplateAreas: '"title" "rules" "close"',
                justifyItems: 'center',

                textAlign: 'center',

                width: '100%',
                height: '100%',

                '& .closeContainer': {
                    width: '100%',

                    '& .close': {
                        width: '100%',
                    }
                }
            }
        }
    },
})

const Rules: FC = () => {
    const styles = useStyles()

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : 'auto'
    }, [modalOpen])

    return (
        <div className={styles.container}>
            <button onClick={() => {
                window.scrollTo(0, 0)
                setModalOpen(true)
            }} className={styles.button}>RULES</button>

            {modalOpen
                ? <div className={styles.modalContainer}>
                    <div className="modal">
                        <h2 className="title">RULES</h2>
                        <div className="closeContainer">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="close"><img src="/images/icon-close.svg" alt="" /></button>
                        </div>
                        <img className="rules" src="/images/image-rules.svg" alt="Rules" />
                    </div>
                </div>
                : <></>}
        </div>
    )
}

export default Rules