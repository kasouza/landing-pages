import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    card: {
        padding: '0 30px',
        width: '25vw',

        borderRadius: 10,

        backgroundColor: 'white',


        '& h3': {
            color: 'var(--very-dark-violet)',
        },

        '& p': {
            color: 'var(--grayish-violet)',
            fontSize: 14,
            paddingBottom: '5%',
        },

        '& .imageContainer': {
            position: 'relative',
            top: -40,

            padding: 40,
            borderRadius: '50%',

            background: 'var(--dark-violet)',
            width: 'fit-content',

            '& img': {
                position: 'absolute',
                top: '50%',
                left: '50%',

                transform: 'translate(-50%, -50%)'
            }
        },

        '& .textContainer': {
            position: 'relative',
            top: -20,

            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        }
    }
})

export default function Card({ className, img, imgAlt, title, text }) {
    const classes = useStyles()

    return (
        <div className={classes.card + ' ' + (className || '')}>
            <div className="imageContainer">
                <img src={img} alt={imgAlt || ''} />
            </div>

            <div className="textContainer">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}