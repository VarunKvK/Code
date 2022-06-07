const container=document.querySelector('.container');
const box1=document.querySelector('.box1');
const body=document.querySelector('body');
const taste=document.querySelector('.taste');
const tasteOpen=document.querySelector('.taste-open');
const cocola=document.querySelector('.cocola');
const coc=document.querySelector('.coc');
const circle=document.querySelector('.circle');

container.addEventListener('mouseenter',transform);

function transform(){
    box1.style.width='50rem';
    box1.style.height='20rem';
    box1.style.borderRadius='10px';
    box1.style.background='#00BEFA';
    taste.style.opacity="0%";
    tasteOpen.style.opacity="100%";
    coc.style.fontSize="3rem";
    coc.style.left="23rem";
    coc.style.top="12rem";
    cocola.style.top="-1rem";    
    cocola.style.left="7rem";    
    console.log('MouseEntered');
};

container.addEventListener('mouseleave',()=>{
    box1.style.width='27rem';
    box1.style.height='27rem';
    box1.style.borderRadius="27rem";
    box1.style.background='#FA0000';
    taste.style.opacity="100%";
    tasteOpen.style.opacity="0%";
    coc.style.left="33rem";
    coc.style.top="12rem";
    cocola.style.top="3rem";    
    cocola.style.left="9rem";
    console.log('MouseLeft');
});