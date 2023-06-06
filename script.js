let isOpen = false
// let icCross = false

function openMenu() {
    const menu = document.getElementById("mobMenu")
    const burger = document.getElementById("icOpen")
    const cross = document.getElementById("icClose")

    if (isOpen) {   // если открыто
        menu.style.display = "none" // нужно закрыть
        cross.style.display = "none"    // скрыть крестик
        burger.style.display = "flex"   // нужно показать бургер
        isOpen = false              
    } else {    // иначе
        menu.style.display = "inline"    // нужно открыть
        cross.style.display = "flex"    // нужно показать крестик
        burger.style.display = "none"   // скрыть бургер
        isOpen = true
    }
}