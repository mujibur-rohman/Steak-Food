const hamburger = document.getElementsByClassName('hamburger')[0];
const menu = document.querySelector('#header ul');
const nav = document.querySelector('#header nav');
const list_menu = document.querySelectorAll('#header ul a');
const menu_ham = document.querySelectorAll('#header .hamburger span');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('slide');
});

window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY > 0);
    for(i = 0; i<list_menu.length; i++){
        list_menu[i].classList.toggle('sticky', window.scrollY > 0);
    }
    menu.classList.toggle('sticky', window.scrollY > 0);
    for(i = 0; i<menu_ham.length; i++){
        menu_ham[i].classList.toggle('sticky', window.scrollY > 0);
    }

});