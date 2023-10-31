const openMenu = document.getElementById("mobile_menu_open");
const closeMenu = document.getElementById("mobile_menu_close");
const menu = document.getElementsByTagName("nav");
const filter = document.querySelector(".filter")
openMenu.addEventListener("click", function(){
    menu[0].style.display = "flex";
    filter.style.display = "flex";
})
closeMenu.addEventListener("click",function(){
    menu[0].style.display = "none";
    filter.style.display = "none";
})