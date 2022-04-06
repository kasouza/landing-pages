import LinkButton from "./LinkButton"
import Hamburger from "./Hamburger"

import { useState } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    header: {
        position: 'relative',

        display: 'flex',
        alignItems: 'center',

        padding: '40px var(--distance-from-border)',
        gap: 40,

        '@media screen and (max-width: 800px)': {
            justifyContent: "space-between",
        }
    },

    hamburger: {
        display: 'none',

        '@media screen and (max-width: 800px)': {
            display: 'block'
        }
    },
    
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,

        
        '&.show': {
            display: 'flex',
            zIndex: 9999,
        },
        
        '& .innerNav': {
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            
            '& a:not(.sign-up-button)': {
                color: 'var(--grayish-violet)',
                transition: '100ms',

                '&:hover, &:focus': {
                    color: 'var(--very-dark-violet)',
                }
            },
        },

        '@media screen and (max-width: 800px)': {
            display: 'none',

            padding: '15px 40px',
            fontSize: 20,
            fontWeight: 700,
            
            flexDirection: 'column',

            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',

            width: '90vw',

            backgroundColor: 'var(--dark-violet)',

            borderRadius: 10,

            color: 'white',

            '& .innerNav': {
                gap: 30,
                width: '100%',
                flexDirection: 'column',
                padding: '30px 0',

                '&:first-child': {
                    borderBottom: '1px solid var(--gray)',
                },

                '& a': {
                    color: 'white !important',
                },

                '& .sign-up-button': {
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                }
            },
        },
    },
})

export default function Header() {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)

    function onChangeHandler() {
        setChecked(!checked)
    }

    return (
        <header className={classes.header}>
            <img src="images/logo.svg" alt="Logo" />

            <Hamburger className={classes.hamburger} checked={checked} onChange={onChangeHandler} />

            <nav className={classes.nav + (checked ? ' show' : '')}>
                <div className="innerNav">
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">Resources</a>
                </div>

                <div className="innerNav">
                    <a href="">Login</a>
                    <LinkButton className="sign-up-button" href="#" text="Sign Up"/>
                </div>
            </nav>
        </header>
    )
}