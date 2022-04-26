import Card from './components/Card.js'
import Footer from './components/Footer.js'
import LinkButton from './components/LinkButton.js'
import Header from './components/Header.js'
import URLShortener from './components/URLShortener.js'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  intro: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,

    width: '100%',

    marginBottom: 50,
    paddingLeft: 'var(--distance-from-border)',

    overflowX: 'hidden',

    '& .text-container': {
      flex: '1 0 50%',

      display: 'flex',
      flexDirection: 'column',
      gap: 40,

      '& .titles': {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,

        '& h1': {
          color: 'var(--very-dark-violet)',
          fontSize: 68,
          lineHeight: '76px',
        },

        '& h2': {
          color: 'var(--grayish-violet)',
          fontSize: 18,
          maxWidth: '95%',
          fontWeight: 400,
        },
      },

      '& .get-started-button': {
        width: 'fit-content',
        padding: '10px 35px',
        fontWeight: 700,
        letterSpacing: 0.2,
        fontSize: 16,
      },
    },

    '& img': {
      flex: '0 1 0',
      width: '100%',
    },

    '@media screen and (max-width: 1150px)': {
      flexDirection: 'column-reverse',
      paddingLeft: 0,

      textAlign: 'center',

      '& .text-container': {
        alignItems: 'center',
        gap: 25,

        '& .titles': {
          alignItems: 'center',

          '& h1': {
            maxWidth: '95%',
            fontSize: '46px !important',
            lineHeight: '58px !important',
          },

          '& h2': {
            fontSize: '18px !important',
            width: '80%',
          },
        },

        '& .get-started-button': {
          padding: '18px 40px !important',
          borderRadius: '40px !important',
          fontWeight: 700,
        },
      },

      '& img': {
        position: 'relative',
        left: '14vw',
      },
    },
  },

  urlShortenerContainer: {
    display: 'flex',
    justifyContent: 'center',
    /* A bit hacky but it works, 71.5px === half the height of the url shortener form */
    background: 'linear-gradient(white 71.5px, var(--light-gray) 71.5px)',

    '& .urlShortener': {
      width: '80%',
    }
  },

  advancedStatistics: {
    backgroundColor: 'var(--light-gray)',
    paddingBottom: 100,

    '& .headings': {
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      textAlign: 'center',

      '& h2': {
        fontSize: 40,
        color: 'var(--very-dark-violet)',
      },

      '& h3': {
        color: 'var(--grayish-violet)',
        fontSize: 18,
        fontWeight: 400,
        maxWidth: '50%',
      }
    },

    '& .cardsContainer': {
      height: 310,
      listStyle: 'none',

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      '& .separator': {
        width: 25,
        height: 7,

        backgroundColor: 'var(--cyan)',
      },

      '& li': {
        '&:first-child': {
          alignSelf: 'start',
        },

        '&:last-child': {
          alignSelf: 'end',
        },

        '&:focus': {
        }
      },

      '@media screen and (max-width: 1050px)': {
        margin: '0 auto',
        height: 'auto',
        flexDirection: 'column',
        width: '90%',
        maxWidth: 400,

        '& .separator': {
          height: 80,
          width: 7,

          backgroundColor: 'var(--cyan)',
        },

        '& li': {
          '&:first-child': {
            alignSelf: 'center !important',
          },

          '&:last-child': {
            alignSelf: 'center !important',
          },
        },

        '& .card': {
          paddingBottom: 25,

          width: '100%',
          '& .imageContainer': {
            margin: '0 auto',
          }
        }
      }
    }
  },

  boost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,

    textAlign: 'center',

    padding: 40,
    width: '100%',

    background: 'url("images/bg-boost-desktop.svg") no-repeat',
    backgroundSize: '100%',
    backgroundColor: 'var(--dark-violet)',


    color: 'white',

    '& h2': {
      fontSize: 32,
    },

    '& .getStartedButton': {
      padding: '11px 30px',
      width: 'fit-content',
    }
  },

  attribution: {
    padding: '120px 0',
    backgroundColor: 'var(--very-dark-violet)',
    color: 'white',
    textAlign: 'center',

    '& a': {
      color: 'white',
      textDecoration: 'underline',
    }
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.App}>
      <Header />

      <main>
        <section className={classes.intro}>
          <div className="text-container">
            <div className="titles">
              <h1>More than just shorter links</h1>
              <h2>
                Build your brand’s recognition and get detailed insights
                on how your links are performing.
              </h2>
            </div>

            <LinkButton className="get-started-button" href="#" text="Get Started" />
          </div>

          <img src="images/illustration-working.svg" alt="" />
        </section>

        <section className={classes.urlShortenerContainer}>
          <URLShortener className="urlShortener" />
        </section>

        <section className={classes.advancedStatistics}>
          <div className="headings">
            <h2>Advanced Statistics</h2>
            <h3>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </h3>
          </div>

          <ul className="cardsContainer">
            <li tabIndex={0}>
              <Card className="card" img="images/icon-brand-recognition.svg" imgAlt="Brand Recognition Icon" title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t
                  mean a thing. Branded links help instil confidence in your content." />
            </li>

            <div className="separator"></div>

            <li tabIndex={0}>
              <Card className="card" img="images/icon-detailed-records.svg" imgAlt="Detailed Records Icon" title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where
                  people engage with your content helps inform better decisions." />
            </li>

            <div className="separator"></div>

            <li tabIndex={0}>
              <Card className="card" img="images/icon-fully-customizable.svg" imgAlt="Fully Customizable Icon" title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable
                  links, supercharging audience engagement." />
            </li>
          </ul>
        </section>

        <section className={classes.boost}>
          <h2>Boost your links today</h2>

          <LinkButton className="getStartedButton" text="Get Started" />
        </section>
      </main>

      <Footer />

      <div className={classes.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/kasouza">kasouza</a>.
      </div>
    </div>
  )
}

export default App
