const card =document.querySelector('.card');
const container=document.querySelector('.container');

const sneaker=document.querySelector('.sneaker img');
const title=document.querySelector('.title');
const description=document.querySelector('.description');
const purchase=document.querySelector('.purchase button');
const size=document.querySelector('.sizes');

container.addEventListener('mouseenter',(e) =>{
    card.style.transition= 'all 0.2s ease';
    title.style.transform='translateZ(150rem)';
    sneaker.style.transform='translateZ(150px) rotateZ(45deg)';
    description.style.transform='translateZ(150px)';
    purchase.style.transform='translateZ(150px)';
    size.style.transform='translateZ(150px)';
});

container.addEventListener('mousemove',(e) =>{
    let xAxis=(window.innerWidth/2-e.pageX)/10;
    let yAxis=(window.innerHeight/2-e.pageY)/10;
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseleave',(e) =>{
    card.style.transition= 'all 0.5s ease';
    card.style.transform= `rotateY(${0}deg) rotateX(${0}deg)`;
    title.style.transform='translateZ(0px)';
    sneaker.style.transform='translateZ(0px) rotateZ(0deg)';
    size.style.transform='translateZ(0px)';
    description.style.transform='translateZ(0px)';
    purchase.style.transform='translateZ(0px)';
});
