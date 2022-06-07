const path=document.querySelector("path");
const pathLength=path.getTotalLength();

path.style.strokeDasharray=pathLength+" "+pathLength;
path.style.strokeDashoffset=pathLength;

window.addEventListener('scroll',()=>{
    //what % down it is?
    var scrollPercent=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);

    //the amount the user scrolled
    var drawLength=pathLength*scrollPercent;

    //to reset/reverse back
    path.style.strokeDashoffset=pathLength-drawLength;
});