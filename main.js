import './style.css'

const nav_menu = document.querySelectorAll('.nav_menu a')
nav_menu.forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("menu-open").checked = false;
    })
})

const fixedOpenMenu = document.getElementById('fixedOpenMenu')
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        fixedOpenMenu.style.display = "block";
    } else {
        fixedOpenMenu.style.display = "none";
    }
});



