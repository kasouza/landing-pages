import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    hamburger: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        background: 'none',
        border: 'none',

        width: 32,
        height: 28,

        cursor: 'pointer',

        '& .bar': {
            width: '100%',
            height: 4,
            borderRadius: 2,
            backgroundColor: 'var(--grayish-violet)'
        },
    }
})

export default function Hamburger({ className, checked, onChange }) {
    const classes = useStyles()

    return (
        <div className={'wrapper' + ' ' + (className || '')}>
            <button className={classes.hamburger + (checked ? ' checked' : '')} onClick={onChange}>
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
            </button>
        </div>
    )
}