const slider1=document.querySelector('.slider1');
const slider2=document.querySelector('.slider2');
const slider3=document.querySelector('.slider3');

slider1.addEventListener('click',(e)=>{
    removeActiveClass();
    slider1.classList.add("active");
});
function removeActiveClass() {
    slider1.classList.remove("active");
}

slider2.addEventListener('click',(e)=>{
    removeActiveClass();
    slider2.classList.add("active");
});
function removeActiveClass() {
    slider2.classList.remove("active");
}

slider3.addEventListener('click',(e)=>{
    removeActiveClass();
    slider3.classList.add("active");
});
function removeActiveClass() {
    slider3.classList.remove("active");
}