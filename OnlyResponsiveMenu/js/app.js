const menuIcon=document.getElementById('menu-icon-container');
const menuContainer=document.getElementById('menu-container');
const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const menu=document.querySelectorAll('.menu')
const listmenu=document.querySelector('.listmenu')

menuIcon.addEventListener('click',menuopens)
menu.forEach((item)=>item.addEventListener('click',menuselect))

function menuopens(){
    menuIcon.classList.toggle('menucloseicon')
    menuContainer.classList.toggle('menuoptionopen');
    line1.classList.toggle('line1');
    line2.classList.toggle('line2');
    line3.classList.toggle('line3');
}


function menuselect(){
    menu.forEach((item)=>{
        item.classList.remove('active')
    })
    this.classList.add('active')
}