import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    button: {
        display: 'block',

        padding: '7px 18px',
        backgroundColor: 'var(--cyan)',
        color: 'white',

        borderRadius: 30,

        transition: '100ms',

        textAlign: 'center',

        '&:hover, &:focus': {
            filter: 'brightness(120%)'
        }
    }
})


export default function LinkButton({ className, href, text }) {
    const classes = useStyles()
    return (
        <a className={classes.button + ' ' + (className || '')} href={href || ''}>{text}</a>
    )
}