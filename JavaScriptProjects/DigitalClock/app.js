const hourDigits=document.querySelector('.hour-digits');
const minuteDigits=document.querySelector('.minute-digits');
const secondDigits=document.querySelector('.second-digits');

setInterval(()=>{
let date=new Date;
let hour=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
hourDigits.textContent=hour;
minuteDigits.textContent=minutes;
secondDigits.textContent=seconds;
console.log(seconds)
})