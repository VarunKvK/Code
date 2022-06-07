const outercircle = document.querySelector('.outercircle');
const container = document.querySelector('.container');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const line = document.querySelector('.line');
const body = document.querySelector('body');


body.addEventListener('click', (e) => {
    body.style.background = 'rgb(28, 153, 115)';
});

let tl = gsap.timeline();
tl.from('.outercircle', 1, { x: -50, scale: 0.1 })
    .from('.l1', 1, { x: -450, height: 2, width: 10 }, "-=.8")
    .from('.l2', 1, { x: -460, height: 2, width: 10 }, "-=.9")
    .from('.l3', 1, { x: -470, height: 2, width: 10 }, "-=.9");

outercircle.addEventListener('click', (u) => {
    line.style.transform = 'translateX(.1rem)'
    l2.style.transform = 'rotate(45deg) translateY(.7rem) translateX(.5rem)';
    l3.style.transform = 'rotate(-45deg) translateY(-.65rem) translateX(.4rem)';
    l1.style.transform = 'rotate(-45deg) ';
    l1.style.opacity = '0';
});

