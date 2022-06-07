const weight=document.querySelector('.inputw');
const height=document.querySelector('.inputh');
const output=document.querySelector('.output');
const calculate=document.querySelector('.calculate');
const description=document.querySelector('.description');

calculate.addEventListener('click',bmiresult);

function bmiresult(){
    const weightinput=parseInt(weight.value);
    const heightinput=parseInt(height.value);
    if(weightinput===""||heightinput===""||isNaN(weightinput)||isNaN(heightinput)){
        description.innerHTML="There is no input."
        output.textContent=""
    }
    else{
        const bmi=(weightinput/((heightinput*heightinput)/10000)).toFixed(2);
        console.log(bmi)
        if(bmi<18){
            description.textContent="You are Underweight"
            output.textContent=bmi;
        }
        else if(bmi>18 && bmi<24){
            description.textContent="You got Normalweight"
            output.textContent=bmi;
        }
        else if(bmi>24){
            description.textContent="You got Overweight"
            output.textContent=bmi;
        }
    }
}