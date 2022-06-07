const input = document.querySelector('.input');
const inputconverted = document.querySelector('.inputconverted');
const equal = document.querySelector('.equal');
const heightmeasurement = document.getElementById('heightmeasurement');

equal.addEventListener('click', output)

function output() {
    const inputvalue = parseInt(input.value);
    const measure=heightmeasurement.value;
    console.log('clicked')
    switch (measure) {
        case 'Meter':
            convert_meter(inputvalue);
            break;
        case 'KiloMeter':
            convert_kilo(inputvalue);
            break;
        case 'Inch':
            convert_inch(inputvalue);
            break;
        case 'Feet':
            convert_feet(inputvalue);
            break;
        default:
            console.log('Error');
    }
    function convert_meter(inputvalue) {
        var rate = 100;
        var resultmeter = inputvalue / rate;
        inputconverted.innerHTML = resultmeter.toFixed(3);
        console.log(resultmeter,'meter')
    }
    function convert_kilo(inputvalue) {
        var rate = 100000;
        var resultkilo = inputvalue / rate;
        inputconverted.innerHTML = resultkilo.toFixed(3);
        console.log('kilometer')
    }
    function convert_inch(inputvalue) {
        var rate = 2.54;
        var resultinches = inputvalue / rate;
        inputconverted.innerHTML = resultinches.toFixed(3);
        console.log(resultinches,'inches')
    }
    function convert_feet(inputvalue) {
        var rate = 30.48;
        var resultfeet = inputvalue / rate;
        inputconverted.innerHTML = resultfeet.toFixed(3);
        console.log('feet')
    }

}