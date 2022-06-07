const hourhand=document.querySelector('.hourhand');
const minutehand=document.querySelector('.minutehand');
const secondhand=document.querySelector('.secondhand');
const second=document.querySelector('.second');
const minute=document.querySelector('.minute');
const hour=document.querySelector('.hour');

setInterval(()=>{
let day=new Date();
let hr=day.getHours()*30;
let hrs=day.getHours();
hour.innerHTML=hrs-12;
let mn=day.getMinutes()*6;
let mns=day.getMinutes();
minute.innerHTML=mns;
let sc=day.getSeconds()*6;
let scs=day.getSeconds();
second.innerHTML=scs;

hourhand.style.transform=`rotateZ(${hr+(mn/12)}deg)`;
minutehand.style.transform=`rotateZ(${mn}deg)`;
secondhand.style.transform=`rotateZ(${sc}deg)`;
})
