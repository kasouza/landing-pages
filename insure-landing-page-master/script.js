(() => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const hamburgerBtnImg = document.querySelector('#hamburger-button img')
    const nav = document.getElementById('nav')

    let showing = false

    hamburgerBtn.addEventListener('click', () => {
        showing = !showing

        if (showing) {
            nav.classList.add('show')
            document.body.classList.add('no-scroll')
            
            hamburgerBtnImg.src = 'images/icon-close.svg'
        } else {
            nav.classList.remove('show')
            document.body.classList.remove('no-scroll')

            hamburgerBtnImg.src = 'images/icon-hamburger.svg'
        }
    })
})()