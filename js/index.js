var elHeaderList = document.querySelector(".header-list");
var elBurger = document.querySelector(".burger");

elBurger.addEventListener("click", function(){
    elHeaderList.classList.toggle("header-list-menu");
})