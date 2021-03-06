const shortbar=document.querySelector('.shortbar');
const longbar=document.querySelector('.longerbar');
const searchbar=document.querySelector('.searchbar');
const body=document.querySelector('body');
const circle4=document.querySelector('.circle4');



searchbar.addEventListener('mouseenter',(e)=>{
    shortbar.style.width='6rem';
});

searchbar.addEventListener('mouseleave',(e)=>{
    shortbar.style.width='5rem';
});

body.addEventListener("mousemove",(e)=>{
    const mouseX=event.clientX;
    const mouseY=event.clientY;

    gsap.to('.circle4',1,{x:mouseX, y:mouseY,stagger:0.1});
})

let t1 = gsap.timeline();
t1.from('.amazon',1,{y:-1000})
    .to('.amazon',1,{x:100})
    .to('.square',1,{x:-73},"=-1")
    .to('.circle',1,{y:-1200,ease: "power1.inOut"},"=+1")
    .to('.circle2',1,{y:-1200,stagger:1},"=-.7")
    .to('.circle3',1,{y:-1200,stagger:3},"=-.9");


