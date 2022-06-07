const startprocess=document.querySelector(".startprocess");
const container2=document.querySelector(".container2");
const closebtn=document.querySelector(".close");
startprocess.addEventListener('click',(e)=>{
    container2.style.top='8rem';
    container2.style.opacity='100';
    console.log("Button Clicked");
});

closebtn.addEventListener('click',(closed)=>{
    container2.style.top='-50rem';
    container2.style.opacity='0';
    console.log("Button Clicked and Closed");
})