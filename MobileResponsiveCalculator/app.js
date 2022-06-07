///input values
const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const result=document.getElementById('result');

//btn select
const add=document.getElementById("add");
const subtract=document.getElementById("subtract");
const multiply=document.getElementById("multiply");
const divide=document.getElementById("divide");
const clear=document.getElementById("clear");
const equal=document.getElementById("equal");

//operations
clear.addEventListener('click',(cleared)=>{
    cleared.preventDefault();
    console.log('clear pressed');
    num1.value="";
    num2.value="";
    result.value="";
    clear.style.background="rgb(197, 219, 69)";
});

add.addEventListener('click',(outputDisplay)=>{
    const number1=parseInt(num1.value);
    const number2=parseInt(num2.value);
    outputDisplay.preventDefault();
    equal.addEventListener('click',(addition)=>{
        if(add.value=="+"){
            console.log("Add");
            result.value=number1+number2;
        }
        equal.style.background="rgb(197, 219, 69)";
    });
    add.style.background="rgb(197, 219, 69)";
});

subtract.addEventListener('click',(outputDisplay)=>{
    const number1=parseInt(num1.value);
    const number2=parseInt(num2.value);
    outputDisplay.preventDefault();
    equal.addEventListener('click',(minus)=>{
        if(subtract.value=="-"){
            console.log("Subtract");
            result.value=number1-number2;
        }
        equal.style.background="rgb(197, 219, 69)";
    });
    subtract.style.background="rgb(197, 219, 69)";
});

multiply.addEventListener('click',(outputDisplay)=>{
    const number1=parseInt(num1.value);
    const number2=parseInt(num2.value);
    outputDisplay.preventDefault();
    equal.addEventListener('click',(product)=>{
        if(multiply.value=="x"){
            console.log("Multiply");
            result.value=number1*number2;
        }
        equal.style.background="rgb(197, 219, 69)";
    });
    multiply.style.background="rgb(197, 219, 69)";
});

divide.addEventListener('click',(outputDisplay)=>{
    const number1=parseInt(num1.value);
    const number2=parseInt(num2.value);
    outputDisplay.preventDefault();
    equal.addEventListener('click',(division)=>{
        if(divide.value=="/"){
            console.log("Divide");
            result.value=number1/number2;
        }
        equal.style.background="rgb(197, 219, 69)";
    });
    divide.style.background="rgb(197, 219, 69)";
});
