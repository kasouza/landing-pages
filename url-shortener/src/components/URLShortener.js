import Spinner from "./Spinner"

import { createUseStyles } from "react-jss"
import { useEffect, useState } from "react"

const useStyles = createUseStyles({
    urlShortener: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    form: {
        padding: 45,

        borderRadius: 10,

        background: 'url("images/bg-shorten-desktop.svg") no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: 'var(--dark-violet)',

        display: 'flex',
        flexDirection: 'row',
        gap: 15,

        width: '100%',

        '& .urlContainer': {
            position: 'relative',

            width: '100%',

            '& #url': {
                width: '100%',
                height: 53,
                padding: '0 20px',
                border: 0,
                borderRadius: 8,
                fontSize: 15,
                color: 'var(--dark-violet)',
                fontWeight: 700,

                '&.error': {
                    border: '2px solid var(--red)',
                },
            },

            '& span.error': {
                position: 'absolute',
                display: 'block',
                color: 'var(--red)',
                fontSize: 14,
                top: '108%',
                fontStyle: 'italic'
            },
        },


        '& button': {
            cursor: 'pointer',

            height: 53,
            padding: '0 15px',
            borderRadius: 8,

            backgroundColor: 'var(--cyan)',
            color: 'white',

            fontWeight: '700',
            whiteSpace: 'nowrap',

            transition: '100ms',

            fontSize: 15,

            '&:hover, &:focus': {
                filter: 'brightness(115%)',
            }
        },

        '@media screen and (max-width: 800px)': {
            padding: 20,
            flexDirection: 'column',
            gap: 0,

            '& .urlContainer': {
                '& #url': {
                    fontSize: 16,
                },

                '& span.error': {
                    padding: '10px 0',
                    paddingTop: 3,
                    position: 'static !important'
                }
            },

            '& button': {
                width: '100%',

                fontSize: 20,
            }
        },
    },

    shortenedLinks: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    loading: {
        background: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: '15px 30px',
        backgroundColor: 'white',
        borderRadius: 5,
        gap: 20,
        width: '100%',

        '& .original': {
            flexGrow: 1,
            maxWidth: '100%',
            color: 'var(--dark-violet)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',

            '&:hover, &:focus': {
                filter: 'brightness(150%)',
            }
        },

        '& .short': {
            color: 'var(--cyan)',

            '&:hover, &:focus': {
                filter: 'brightness(115%)',
            }
        },

        '& button': {
            cursor: 'pointer',
            width: 90,
            padding: '10px 0',
            background: 'var(--cyan)',
            borderRadius: 5,
            color: 'white',
            fontWeight: 700,

            transition: '100ms',

            '&:hover, &:focus': {
                filter: 'brightness(115%)'
            },

            '&.copied': {
                backgroundColor: 'var(--dark-violet)',

                '&:hover': {
                    filter: 'brightness(150%)'
                },
            }

        },

        '@media screen and (max-width: 800px)': {
            flexDirection: 'column',
            padding: 15,
            paddingTop: 0,
            gap: 0,

            alignItems: 'start',

            '& .original': {
                padding: '10px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
            },

            '& .short': {
                padding: '10px 0',
            },

            '& button': {
                width: '100%',
                textAlign: 'center',
            }
        }
    }
})

const apiUrl = 'https://api.shrtco.de/v2'


export default function URLShortener({ className }) {
    const classes = useStyles()
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState({})
    const [ID, setID] = useState(0)

    const getNewID = () => {
        setID(ID + 1)
        return ID
    }

    const isValid = link => {
        return link !== undefined && link.code !== undefined && link.originalLink !== undefined && link.shortLink !== undefined && link.loading !== undefined && !link.loading
    }

    useEffect(() => {
        const newShortenedLinks = {}
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (!isNaN(key)) {

                newShortenedLinks[key] = JSON.parse(localStorage.getItem(key))

                if (isValid(newShortenedLinks[key])) {
                    setID(ID => {
                        const newID = Math.max(ID, parseInt(key)) + 1
                        setID(newID)
                    })
                } else {
                    delete newShortenedLinks[key]
                }
            }
        }

        setShortenedLinks(newShortenedLinks)
    }, [])

    useEffect(() => {
        localStorage.clear()
        Object.entries(shortenedLinks).forEach(([key, value]) => {
            console.log(value)
            localStorage.setItem(key, JSON.stringify(value))
        })
    }, [shortenedLinks])

    const handleSubmit = e => {
        e.preventDefault()

        if (url !== '') {
            const ID = getNewID()

            setShortenedLinks({
                ...shortenedLinks,
                [ID]: {
                    // originalLink: body.result.original_link,
                    // shortLink: body.result.full_short_link,
                    // copied: false,
                    loading: true,
                }
            })

            fetch(`${apiUrl}/shorten?url=${url}`).catch(err => {
                // Error happened fetching the content
                console.err(`Error while fetching: ${err}`)
            }).then(res => {
                res.json()
                    .catch(err => {
                        // Error reading message into JSON format
                        console.err('Error parsing response')
                    })
                    .then(body => {
                        // Everything went fine
                        if (body.ok) {
                            setShortenedLinks({
                                ...(Object.fromEntries(Object.entries(shortenedLinks)
                                    .filter(([_, value]) => value.code !== body.result.code))),
                                [ID]: {
                                    code: body.result.code,
                                    originalLink: body.result.original_link,
                                    shortLink: body.result.full_short_link,
                                    copied: false,
                                    loading: false,
                                }
                            })

                            setError('')
                        } else {
                            console.err(`API error: ${body.error_code}`)
                        }
                    })
            })
        } else {
            setError('Please add a link')
        }
    }

    const Card = ({ originalLink, shortLink, copied, setCopied, loading }) => {
        if (!loading) {
            let buttonClasses = copied ? 'copied' : 'copy'
            let buttonText = copied ? 'Copied!' : 'Copy'

            const copyText = () => {
                navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
                    if (result.state === 'granted' || result.state === 'prompt') {
                        navigator.clipboard.writeText(shortLink).then(() => {
                            setCopied(true)
                        }, () => {
                            // Failed
                        })
                    }
                })
            }

            return (
                <li className={classes.card}>
                    <a href={originalLink} className="original">{originalLink}</a>
                    <a href={shortLink} className="short">{shortLink}</a>
                    <button onClick={copyText} className={buttonClasses}>{buttonText}</button>
                </li>
            )
        } else {
            return (
                <li className={classes.loading}><Spinner /></li>
            )
        }
    }

    const handleChange = e => {
        setUrl(e.target.value)
        setError('')
    }

    return (
        <div className={classes.urlShortener + ' ' + (className || '')}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className="urlContainer">
                    <input className={error === '' ? '' : 'error'} type="text" name="url" id="url" value={url} onChange={handleChange} placeholder="Shorten a link here..." aria-label="Shorten a link here" />
                    <span className="error">{error}</span>
                </div>

                <button type="submit">Shorten It!</button>
            </form>

            {/* <Card originalLink="youtudasssssssssssssssssssssssssssssdadassdaksldjaslkbe.com" shortLink="saske.com" /> */}
            <ol className={classes.shortenedLinks}>
                {Object.entries(shortenedLinks).reverse().map(([key, value]) => (
                    <Card key={key} originalLink={value.originalLink} shortLink={value.shortLink} copied={value.copied} loading={value.loading} setCopied={() => setShortenedLinks({
                        ...shortenedLinks,
                        [key]: {
                            ...value,
                            copied: true
                        }
                    })} />
                ))}
            </ol>
        </div>
    )
}