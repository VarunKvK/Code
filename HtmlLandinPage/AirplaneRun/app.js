const airplane=document.querySelector(".airplane");
const plane=document.querySelector(".plane");
const nothing=document.querySelector(".nothing");

airplane.addEventListener("mouseenter",(fly)=>{
    plane.style.transition="all 0.5s ease-in-out";
    plane.style.left="-50rem";
    plane.style.transform="translateY(-50rem)";
    nothing.style.opacity=0;
    nothing.style.transition="all 0.5s ease-in-out";
});

airplane.addEventListener("mouseleave",(back)=>{
    plane.style.transform="rotate(360deg)";
});

