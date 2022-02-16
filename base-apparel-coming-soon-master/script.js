const form = document.querySelector('.email-wrapper')
const errorMessage = document.querySelector('.invalid-email')
const inpt = document.querySelector('.email-wrapper input')

const img = document.querySelector('.hero-image')

form.onsubmit = handleSubmit
window.onresize = handleResize

function validateEmail(email) {
    if (email.trim() === "") {
        return false
    }

    return "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/".test(email)
}

function handleSubmit(e) {
    const data = new FormData(form)
    const email = data.get('email')

    const valid = validateEmail(email)
    if (!valid) {
        inpt.setCustomValidity('Invalid email')
        inpt.reportValidity()
        form.style.borderColor = 'red'
        errorMessage.style.visibility = 'visible'
        e.preventDefault()
    }
}

function handleResize() {
    if (window.innerWidth <= 800 && img.src !== "images/hero-mobile.jpg") {
        img.src = "images/hero-mobile.jpg"
    } else if(img.src !== "images/hero-desktop.jpg") {
        img.src = "images/hero-desktop.jpg"
    }
}

(() => {
    handleResize()
})

document.onclick = event => {
    form.style.borderColor = 'rgba(0, 0, 0, 0.3)'
    errorMessage.style.visibility = 'hidden'
}