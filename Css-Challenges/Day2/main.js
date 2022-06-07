const menu=document.querySelector('.menu')
let menuOpen=false;

menu.addEventListener('click', ()=>{
if(menuOpen==false){
    menu.classList.add('menu-open');
    menuOpen=true;
}else{
    menu.classList.remove('menu-open');
    menuOpen=false;
}
});