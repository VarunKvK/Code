const ice=document.querySelector('.ice');
const fire=document.querySelector('.fire');
ice.addEventListener('mouseenter',(imagedisplaces)=>{
    let imagemove= gsap.timeline();

    imagemove.to('.ice',3,{x:-50,y:-30,rotateZ:40});
});

ice.addEventListener('mouseleave',(imagebacktoplace)=>{
    let imageback= gsap.timeline();

    imageback.to('.ice',3,{x:0,y:0,rotateZ:0});
});

fire.addEventListener('mouseenter',(imagedisplaces2)=>{
    let imagemove2= gsap.timeline();

    imagemove2.to('.fire',3,{x:50,y:30,rotateZ:-40});
});

fire.addEventListener('mouseleave',(imagebacktoplace2)=>{
    let imageback2= gsap.timeline();

    imageback2.to('.fire',3,{x:0,y:0,rotateZ:0})
});