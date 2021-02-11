
const burgerBtn = document.querySelector('.burger__btn');
const burgerMenuBtn =document.querySelector(".burger__btn");
const burgerMenu =document.querySelector(".burger");
const burgerLinks = document.querySelector(".burger__links");

burgerMenuBtn.addEventListener('click', function(e){
  burgerMenu.classList.toggle("active-menu");
})



