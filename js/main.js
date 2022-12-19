let burgerOpen = document.getElementById('burger')
let burgerClose = document.getElementById('burger__close')
let mobileNav = document.getElementById('mobileNav')

burgerOpen.addEventListener('click', () => {
    mobileNav.style.transition = 'all 0.5s'
    mobileNav.style.transform = 'translateX(0rem)'
})

burgerClose.addEventListener('click', () => {
    mobileNav.style.transition = 'all 0.5s'
    mobileNav.style.transform = 'translateX(85rem)'
}) 