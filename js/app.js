let menu = document.querySelector(".header-top-ul")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "-33px"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-300px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})