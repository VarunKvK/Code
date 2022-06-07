const page2=document.querySelector('.page2');

//Animation
let t1=gsap.timeline({
    scrollTigger:{
        trigger:'.title'
    }
});
t1.from('.intro',1,{y:-100})
t1.to('.intro',1,{y:350,x:950,scale:20})
t1.from('li',{y:-100,duration:1,stagger:.1})
t1.from('.hello',{x:-1500,duration:1},'-=1')
t1.from('.varun',{x:1500,duration:1},'-=1')


let tl=gsap.timeline();
tl.from('.title',1,{y:-1000});
