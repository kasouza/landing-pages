(() => {
    const monthlyPrices = document.querySelectorAll('.price.monthly')
    const annuallyPrices = document.querySelectorAll('.price.annually')

    const toggleButton = document.getElementById('toggle')

    const updatePrices = () => {
        monthlyPrices.forEach(price => {
            price.style.display = toggleButton.checked ? 'inline' : 'none'
        })

        annuallyPrices.forEach(price => {
            price.style.display = !toggleButton.checked ? 'inline' : 'none'
        })
    }

    updatePrices()
    toggleButton.addEventListener('change', updatePrices)
})()