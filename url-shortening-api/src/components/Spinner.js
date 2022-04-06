import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    ldsRing: {
        display: 'inline-block',
        position: 'relative',
        width: 80,
        height: 80,

        '& div': {
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            width: 64,
            height: 64,
            margin: 8,
            border: '8px solid #fff',
            borderRadius: '50%',
            animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            borderColor: 'var(--gray) transparent transparent transparent',
        },

        '& div:nth-child(1)': {
            animationDelay: '-0.45s',
        },

        '& div:nth-child(2)': {
            animationDelay: '-0.3s',
        },

        '& div:nth-child(3)': {
            animationDelay: '-0.15s',
        },
    },
})

export default function Spinner() {
    const classes = useStyles()

    return (
        <div className={classes.ldsRing}><div></div><div></div><div></div><div></div></div>
    )
}