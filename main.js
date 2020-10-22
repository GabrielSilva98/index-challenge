    let cart = document.querySelector('.cart')
    let miniCartModel = document.querySelector('.component-mini-cart')
    let ModelClose = document.querySelector('#close')
    let jsMenu = document.querySelector('.js-menu')
    let primary_navigation = document.querySelector('#primary-navigation')
    let state = false
    let stateCart = false

    cart.addEventListener('click', () => {
        if (!stateCart){
            miniCartModel.style.display = 'block'
            stateCart = true
        } else {
            miniCartModel.style.display = 'none'
            stateCart = false
        }
    })
    
        jsMenu.addEventListener('click', () => {
            if (!state) {
                primary_navigation.classList.add('active')
                state = true
            } else {
                primary_navigation.classList.remove('active')
                state = false
            }
        })
