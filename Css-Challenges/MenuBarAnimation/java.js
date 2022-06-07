const menu=document.querySelector(".menubar");
const container=document.querySelector(".container");
const circle=document.querySelector(".circle");

circle.addEventListener("click",closeMenu);
menu.addEventListener("click",mainmenu);

function mainmenu(){
    container.style.trasition="0.2s";
    container.style.opacity="1";
    container.style.transform="translateY(50px)";
}

function closeMenu(){
    container.style.transform="translateY(-30px)";
    container.style.opacity="0";
    container.style.trasition="0.2s";
}