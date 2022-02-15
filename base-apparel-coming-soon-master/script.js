const form = document.querySelector('.email-wrapper')
const img = document.querySelector('.hero-image')

form.onsubmit = handleSubmit
window.onresize = handleResize

function validateEmail(email) {
    return true
}

function handleSubmit(e) {
    const data = new FormData(form)
    const email = data.get('email')

    const valid = validateEmail(email)
    if (!valid) {
        console.log("djsakdkasjldk")
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