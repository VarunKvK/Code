const image1=document.querySelector('.image1');

image1.addEventListener('mousemove', function(e) {
    let xAxis=(window.innerWidth/2-e.pageX)/25;
    let yAxis=(window.innerHeight/2-e.pageY)/25;
    image1.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

image1.addEventListener('mouseleave', function(e) {
    image1.style.transition='all 0.4s ease';
    image1.style.transform=`rotateY(${0}deg) rotateX(${0}deg)`;
})

const ui=document.querySelector('.ui');

ui.addEventListener('mousemove', function(e) {
    let xAxis=(window.innerWidth/2-e.pageX)/25;
    let yAxis=(window.innerHeight/2-e.pageY)/25;
    ui.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

ui.addEventListener('mouseleave', function(e) {
    ui.style.transition='all 0.4s ease';
    ui.style.transform=`rotateY(${0}deg) rotateX(${0}deg)`;
})

const description=document.querySelector('.description');

description.addEventListener('mousemove', function(e) {
    let yAxis=(window.innerHeight/4-e.pageY)/50;
    description.style.transform= `rotateX(${yAxis}deg)`;
    description.style.font=`10px`;
});

description.addEventListener('mouseleave', function(e) {
    description.style.transition='all 0.4s ease';
    description.style.transform=`rotateX(${0}deg)`;
})