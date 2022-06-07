const input = document.querySelector('.input');
const inputconverted = document.querySelector('.inputconverted');
const masskg = document.querySelector('.masskg');
const equal = document.querySelector('.equal');
const convertors = document.getElementById('convertors');
const errormsg=document.createElement('h4')

equal.addEventListener('click',inputcalculation)

function inputcalculation(){
    const inputvalue=parseInt(input.value);
    const convert=convertors.value;
    if(inputvalue===''||isNaN(inputvalue)||inputvalue<=0){
        errormsg.textContent="No input";
        errormsg.classList.add('errormsg');
        masskg.appendChild(errormsg);
        inputconverted.textContent="";
    }
    else{
        errormsg.textContent="";
        switch(convert){
            case 'Kilogram':
                convert_kilograms(inputvalue)
                break;
            case 'Pound':
                convert_pounds(inputvalue)
                break;
            case 'ounce':
                convert_ounces(inputvalue)
                break;
            case 'Stone':
                convert_stones(inputvalue)
                break;
            default:
                console.error('InputError');
        }
    }
    function convert_kilograms(inputvalue){
        var rate=0.001;
        var resultkilograms=inputvalue*rate;
        inputconverted.textContent=resultkilograms.toFixed(3);
        console.log(resultkilograms,'kilogram');
    }
    function convert_pounds(inputvalue){
        var rate=0.0015;
        var resultpound=inputvalue*rate;
        inputconverted.textContent=resultpound.toFixed(3);
        console.log(resultpound,'pounds');
    }
    function convert_ounces(inputvalue){
        var rate=0.035274;
        var resultounces=inputvalue*rate;
        inputconverted.textContent=resultounces.toFixed(3);
        console.log(resultounces,'o');
    }
    function convert_stones(inputvalue){
        var rate=0.00015747;
        var resultstones=inputvalue*rate;
        inputconverted.textContent=resultstones.toFixed(3);
        console.log(resultstones,'s');
    }
}
