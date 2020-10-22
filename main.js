    let cart = document.querySelector('.cart')
    let miniCartModel = document.querySelector('.component-mini-cart')
    let ModelClose = document.querySelector('#close')
    let jsMenu = document.querySelector('.js-menu')
    let primary_navigation = document.querySelector('#primary-navigation')
    let primarySearch = document.querySelector('.primary-search')
    let jsSearch = document.querySelector('#js-icon')
    let state = false
    let stateCart = false
    let stateSearch = false

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

    jsSearch.addEventListener('click', () => {
        console.log('js-search')
        if (!state) {
            primarySearch.classList.add('active')
            state = true
    } else {
            primarySearch.classList.remove('active')
            state = false
    }

    })

    
