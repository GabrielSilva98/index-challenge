    let cart = document.querySelector('.cart')
    let miniCartModel = document.querySelector('.component-mini-cart')
    let ModelClose = document.querySelector('#close')

    cart.addEventListener('click', () => {
        console.log(miniCartModel)
        miniCartModel.style.display = 'block'
    })

    ModelClose.addEventListener('click', () => {
        console.log(ModelClose)
        miniCartModel.style.display = 'none'
        })
    
