const body =document.querySelector("body");
const slider =document.querySelector(".slider");

body.addEventListener("mousemove",(follow)=>{
    const mouseX=event.clientX;
    const mouseY=event.clientY;

    gsap.to(".shape3",1,{x:mouseX, y:mouseY,stagger:-0.1});
    gsap.to(".shape2",2,{x:mouseX, y:mouseY,stagger:-0.3});
    gsap.to(".shape1",3,{x:mouseX, y:mouseY,stagger:-0.5});
});