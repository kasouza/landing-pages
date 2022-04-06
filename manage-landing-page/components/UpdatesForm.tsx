import { useState, FormEventHandler } from "react"
import styles from "../styles/components/UpdatesForm.module.scss"

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const UpdatesForm = (): JSX.Element => {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        if (email === '') {
            setError('Email cannot be empty')
            e.preventDefault()

        } else if (!emailRegex.test(email)) {
            setError('Please insert a valid email')
            e.preventDefault()
        } else {
            setError('')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <input
                required
                type="text"
                name="email"
                className={`${styles.email} ${error === '' ? '' : styles.error}`}
                id="email"
                title="Your best email here"
                placeholder="Updates in your inbox…"
                aria-label="Your best email to receive updates from us"
                value={email}
                onChange={e => {
                    setError('')
                    setEmail(e.target.value)
                }}
            />

            <button
                className={styles.submit}
                type="submit"
            >
                Go
            </button>

            <span className={styles.error}>{error}</span>
        </form>
    )
}

export default UpdatesForm