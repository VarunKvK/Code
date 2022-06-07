const menuicon=document.querySelector(".menu-icon");
const menu=document.querySelector(".menu");
const company=document.querySelector(".company");
const content=document.querySelector(".content");
const body=document.querySelector("body");
const moto=document.querySelector(".moto");
const mini=document.querySelector(".mini");
const cars=document.querySelector("#car");
menuicon.addEventListener("click",(menucomeup)=>{
    menu.style.transform="translateX(20rem)";
    content.style.opacity="0.4";
});

content.addEventListener("click",(menuclose)=>{
    menu.style.transform="translateX(33rem)";
    content.style.opacity="1";
});

moto.addEventListener("mouseenter",(colorChange)=>{
    moto.style.color="rgb(141, 108, 71)";
    moto.style.transition="all 0.5s ease-in-out";
});

moto.addEventListener("mouseleave",(colorNormal)=>{
    moto.style.color="black";
    moto.style.transition="all 0.5s ease-in-out";
});

