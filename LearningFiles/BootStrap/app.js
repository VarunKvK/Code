const containerone=document.querySelector('.containerone')
const containertwo=document.querySelector('.containertwo')
const rectone=document.querySelector('.rectone')
const recttwo=document.querySelector('.recttwo')

containerone.addEventListener('mouseenter',displayrectone)
containerone.addEventListener('mousemove',displayrectone)
containerone.addEventListener('mouseleave',hiderectone)
function displayrectone(event){
    const mouseX=event.clientX;
    const mouseY=event.clientY;
    gsap.to('.rectone',1,{
        ease: "power2.out",ease: "elastic.out(1, 0.8)",
        x:(mouseX-50),y:(mouseY-450)
    })
    rectone.classList.add('unhide')
}
function hiderectone(){
    rectone.classList.remove('unhide')
}


containertwo.addEventListener('mouseenter',displayrecttwo)
containertwo.addEventListener('mousemove',displayrecttwo)
containertwo.addEventListener('mouseleave',hiderecttwo)
function displayrecttwo(event){
    const mouseX=event.clientX;
    const mouseY=event.clientY;
    gsap.to('.recttwo',1,{
        ease: "power2.out",ease: "elastic.out(1, 0.5)",
        x:(mouseX-50),y:(mouseY-450)
    })
    recttwo.classList.add('unhide')
}
function hiderecttwo(){
    recttwo.classList.remove('unhide')
}