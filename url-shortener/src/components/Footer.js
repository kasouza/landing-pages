import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '80px 0',

        backgroundColor: 'var(--very-dark-violet)',
        color: 'white',

        '@media screen and (max-width: 800px)': {
            flexDirection: 'column',
            alignItems: 'center',

            gap: 40,

            textAlign: 'center',
        }
    },

    colsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 80,

        '@media screen and (max-width: 800px)': {
            flexDirection: 'column',
            gap: 30,
        }
    },

    colWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,

        '& h3': {
            fontSize: 15,
        },

        '& a': {
            color: 'var(--gray)',
            fontSize: 13,

            '&:hover, &:focus': {
                filter: 'brightness(150%)'
            }
        }
    },

    socialIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },

    socialIconContainer: {
        '& .fa-brands': {
            fontSize: 20,
            color: 'white',

            '&:focus, &:hover': {
                color: 'var(--cyan)'
            }
        }
    },

    logo: {
        filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(355deg) brightness(102%) contrast(101%)',
    }
})

export default function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div>
                <img className={classes.logo} src="images/logo.svg" alt="Logo" />
            </div>

            <ul className={classes.colsContainer}>
                <li className={classes.colWrapper}>
                    <h3>Features</h3>
                    <ul className="col">
                        <li><a href="">Link Shortening</a></li>
                        <li><a href="">Branded Links</a></li>
                        <li><a href="">Analytics</a></li>
                    </ul>
                </li>


                <li className={classes.colWrapper}>
                    <h3>Resources</h3>
                    <ul className="col">
                        <li><a href="">Blog</a></li>
                        <li><a href="">Developers</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </li>

                <li className={classes.colWrapper}>
                    <h3>Company</h3>
                    <ul className="col">
                        <li><a href="">About</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </li>
            </ul>

            <ul className={classes.socialIcons}>
                <li className={classes.socialIconContainer}>
                    <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
                </li>

                <li className={classes.socialIconContainer}>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </li>

                <li className={classes.socialIconContainer}>
                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                </li>

                <li className={classes.socialIconContainer}>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
            </ul>
        </footer >
    )
}