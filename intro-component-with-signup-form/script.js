(() => {
    const firstName = document.getElementById('name-first')
    const firstNameErr = document.getElementById('name-first-error')

    function handleFirstNameChange() {
        if (firstName.value === "") {
            firstNameErr.innerText = "First Name cannot be empty"
        } else {
            firstNameErr.innerText = ""
        }
    }

    const lastName = document.getElementById('name-last')
    const lastNameErr = document.getElementById('name-last-error')

    function handleLastNameChange() {
        if (lastName.value === "") {
            lastNameErr.innerText = "Last Name cannot be empty"
        } else {
            lastNameErr.innerText = ""
        }
    }

    const email = document.getElementById('email')
    const emailErr = document.getElementById('email-error')

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    function handleEmailChange() {
        if (email.value === "") {
            emailErr.innerText = "Email Address cannot be empty"
        } else if (!emailRegex.test(email.value)) {
            emailErr.innerText = "Email Address must be a valid email address"
        } else {
            emailErr.innerText = ""
        }
    }

    const password = document.getElementById('password')
    const passwordErr = document.getElementById('password-error')

    function handlePasswordChange() {
        if (password.value === "") {
            passwordErr.innerText = "Password cannot be empty"
        } else if (password.value.length < 8) {
            passwordErr.innerText = "Password must be longer then 8 characters"
        } else if (password.value.length >= 40) {
            passwordErr.innerText = "Password must be shorter then 40 characters"
        } else {
            passwordErr.innerText = ""
        }
    }

    function checkValidity() {
        handleFirstNameChange()
        handleLastNameChange()
        handleEmailChange()
        handlePasswordChange()
    }

    checkValidity()

    firstName.addEventListener('change', handleFirstNameChange)
    lastName.addEventListener('change', handleLastNameChange)
    email.addEventListener('change', handleEmailChange)
    password.addEventListener('change', handlePasswordChange)

})()
