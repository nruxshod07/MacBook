let btns = document.querySelectorAll('.btn')
let img = document.querySelector('.MacBookPhoto')
let color = document.querySelector('.color')
let storageBtns = document.querySelectorAll('.storages button')
let Totalprice = document.querySelector('.info .price')
let storagePrice = document.querySelectorAll('.storages p')

let storagePrices = {
    GB512: "$1,999",
    TB1: "$2,199",
    TB2: "$2,599",
    TB4: "$3,199"
}
let current = storagePrices.GB512
let photo = {
    White: "./img/mbp14-spacegray-select-202110 1macBook.png",
    SpaceGray: "./img/mbp14-silver-select-202110 1.png"
}
btns.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-btn')
        img.src = photo[key]
        color.innerHTML = `${key}`
    }
})
storageBtns.forEach((btn) => {
    btn.onclick = () => {
        storageBtns.forEach(btn => btn.classList.remove('focus'))
        btn.classList.add('focus')
        let key = btn.getAttribute('data-price')
        Totalprice.innerHTML = storagePrices[key]
        current = storagePrices[key]
    }

    btn.onmouseenter = () => {
        let key = btn.getAttribute('data-price')
        Totalprice.innerHTML = storagePrices[key]
    }
    btn.onmouseleave = () => {
        Totalprice.innerHTML = current
    }
})