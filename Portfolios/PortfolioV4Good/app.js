document.addEventListener('DOMContentLoaded', () => {


    const body = document.querySelector("body");

    body.addEventListener('mousemove', () => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        gsap.to('.circle', 1, {
            x: mouseX, y: mouseY
        })

    });

    let t2 =gsap.timeline();

    t2.to('.line1',1,{
        scrollTrigger:{
            scrub:1
        },
        y:-200
    });

    t2.to('.name',3,{
        scrollTrigger:{
            scrub:1
        },
        y:-200
    });

    t2.to('.menu',3,{
        scrollTrigger:{
            scrub:1
        },
        y:-200,
        stagger:5,
        delay:4
    });
    t2.to('.frontend',1,{
        scrollTrigger:{
            scrub:1
        },
        x:200
    },"+=3");

    t2.to('.subhead',1,{
        scrollTrigger:{
            scrub:1
        },
        x:-200
    });

    t2.to('.circlebig',1,{
        scrollTrigger:{
            scrub:1
        },
        scale:1.1,
        border:"3px solid #fff"
    });

    t2.to('.circlesmall',1,{
        scrollTrigger:{
            scrub:1
        },
        scale:1.7,
        border:"2px solid #fff"
    });
    
    let t1 = gsap.timeline();

    t1.from('.frontend', 2, {
        y: 50,
        opacity: 0
    }, '+=2')

        .from('.line1', 2, {
            x: -2000
        }, '-=4')
        .from('.subhead', 1, {
            y: -20,
            opacity: 0
        }, '-=1')
        .from('.circlebig', 1, {
            scale: .5,
            ease: "back.out(2)"
        }, '-=4')
        .from('.circlesmall', 1, {
            scale: .5,
            ease: "back.out(2)",
            delay: .1
        }, '-=4')
});
