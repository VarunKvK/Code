//to get the value and display 
function getPreviousValue() {
    return document.getElementById("previous-value").innerText;
}

function printPreviousValue(num) {
    document.getElementById("previous-value").innerText = num
}
//to get output and display
function getoutputValue() {
    return document.getElementById("current-value").innerText;
}

function printOutputValue(num) {
    if (num == "") {
        document.getElementById("current-value").innerText = num;
    }
    else {
        document.getElementById("current-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");

    return value;
}

function reverseNumber(num) {
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printPreviousValue("");
            printOutputValue("");
        } else if (this.id == "delete") {
            var output = reverseNumber(getoutputValue()).toString();
            if (output) {
                output = output.toString().slice(0, -1);
                printOutputValue(output);
            }
        }
        else {
            var output = getoutputValue();
            var previous = getPreviousValue();
            if (output != "") {
                output = reverseNumber(output);
                previous = previous + output;
                if (this.id == "=") {
                    var result = eval(previous);
                    printOutputValue(result);
                    printPreviousValue("");
                } else {
                    previous = previous + this.id;
                    printPreviousValue(previous);
                    printOutputValue("");
                }
            }
        }

    });
}

let number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var output = reverseNumber(getoutputValue());
        if (output != isNaN) {
            output = output + this.id;
            printOutputValue(output);
        }
    });
}