/*const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const head = document.querySelector(".head");
const filters = document.querySelector(".filters");
const images = document.querySelector(".images");
const images2 = document.querySelector(".images2");
const cost = document.querySelector(".cost");
const listofanimals = document.querySelector(".listofanimals");

function multiply() {
    const multiplication = nums.map((num) => {
        return num * 5;
    });
    console.log(multiplication);
    head.textContent = multiplication
}
multiply();

const filtering = nums.filter((num) => {
    return num < 4;
});

console.log(filtering)
filters.textContent = filtering;

const animals = [
    {
        name: "Dogtoy Bone for dogs",
        cost: 200,
        img: 'BARK Super Chewer Drumstick Dog Toy, Medium _ Petco.jpg'
    },
    {
        name: "BARK Super Chewer Drumstick Dog Toy, Medium _ Petco",
        cost: 350,
        img: 'Kong Airdog Squeaker Dumbbell.jpg'
    }
]

function imageprint() { animals.map(animal => {
    const imgs = document.createElement('img');
    imgs.src = animal.img;
    listofanimals.appendChild(imgs);
    listofanimals.classList.add('style');
    const text=document.createElement('h1');
    text.textContent=animal.name;
    text.classList.add('font');
    listofanimals.appendChild(text);
})
}

imageprint();



fetch(`https://http.cat/100.jpg`)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);
})


let students=["Spongebob","Patrik","Squids"]

function capitalize(name,index,names){
    names[index]=name[0]
    const capital=name[0].toUpperCase()+name.substring(1);
    console.log(capital)
}

students.forEach(capitalize);

let number=[1,2,3,4,5,6]

let square=number.map(squaring)

square.foreach(displaySquare);

function squaring(element){
    return Math.pow(element,2)
}

function displaySquare(element){
 console.log(element);
}

displaySquare();

let number=[1,2,3,4,5,6]
let sum=0

for(let i=0; i<number.length;i++){
    sum+=number[i];
    console.log(sum)
}

sum(2,3,displayaddition);

function sum(x,y,add){
    let result=x+y;
    add(result);
}

function displayaddition(output){
    console.log(output)
}*/

let number=[12,23,4,5,6]

let addnumber=number.reduce(add)
console.log(addnumber)

let evennumber=number.filter(even)
evennumber.forEach(display)

function even(element){
    return element%2==0
}

function display(element){
    console.log(element)
}

function add(total,element){
    return total+element;
}