const button = document.querySelectorAll(".button");
const numbers = document.getElementById("numbers");
var count = 0;

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if(this.id=="add"){
            count++;
            numbers.textContent=count;
        }
        else if(this.id=="dec"){
            count--;
            numbers.innerText=count;
        }
        else{
            count=0;
            numbers.innerText=count;
        }
    });
}