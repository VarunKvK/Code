//Select
const container =document.querySelector(".container");
const circle1=document.querySelector(".circle1");
const circle2=document.querySelector(".circle2");
const circle3=document.querySelector(".circle3");
const circle4=document.querySelector(".circle4");
const h1=document.querySelector(".h1");

//eventListner
container.addEventListener("mouseenter",colorchange);
container.addEventListener("mouseleave",colorsame);

//Function
function colorchange(){
    circle1.style.backgroundColor="rgb(68, 233, 206)";
    circle1.style.height="12rem";
    circle1.style.width="12rem";
    circle1.style.top="4rem";
    circle1.style.left="4rem";
    circle2.style.backgroundColor="rgb(104, 68, 233)";
    circle2.style.height="10rem";
    circle2.style.width="10rem";
    circle2.style.top="5rem";
    circle2.style.left="5rem";
    circle3.style.backgroundColor="rgb(233, 68, 90)";
    circle3.style.height="7rem";
    circle3.style.width="7rem";
    circle3.style.top="6.5rem";
    circle3.style.left="6.5rem";
    h1.style.opacity="1";
}

function colorsame(){
    circle1.style.backgroundColor="rgb(233, 156, 68)";
    circle1.style.height="10rem";
    circle1.style.width="10rem";
    circle1.style.top="5rem";
    circle1.style.left="5rem";
    circle2.style.backgroundColor="rgb(233, 230, 68)";
    circle2.style.height="7rem";
    circle2.style.width="7rem";
    circle2.style.top="6.5rem";
    circle2.style.left="6.5rem";
    circle3.style.backgroundColor="rgb(120, 233, 68)";
    circle3.style.height="5rem";
    circle3.style.width="5rem";
    circle3.style.top="7.5rem";
    circle3.style.left="7.5rem";
    h1.style.opacity="0";
}