const t1=gsap.timeline();

t1.from('.circlefall',1,{y:-1000})
t1.to('.circlefall',1,{y:60,scale:40,stagger:1,ease:Bounce.easeout2})
t1.to('.circlefall',1,{y:-1200})
t1.to('.circleinside',1,{y:-1000,stagger:1,delay:.2},"-=1");