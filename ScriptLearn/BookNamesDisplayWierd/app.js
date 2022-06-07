const book=document.querySelector('.books');
const author=document.querySelector('.author');
const output=document.querySelector('.output');
const output2=document.querySelector('.output2');
const add=document.querySelector('.add');
const removes=document.querySelector('.delete');

add.addEventListener("click",addname);
removes.addEventListener("click",removename);

function addname(e){
    e.preventDefault();

    const div1=document.createElement("div");
    div1.classList.add("names");

    const div2=document.createElement("div");
    div2.classList.add("author");

    const newbook=document.createElement("li");
    newbook.innerText=book.value;
    newbook.classList.add("books");
    div1.appendChild(newbook);

    const writer=document.createElement("li");
    writer.innerText=author.value;
    writer.classList.add("authors");
    div2.appendChild(writer);

    output.appendChild(div1);
    output2.appendChild(div2);
    author.value="";
    book.value="";

}

function removename(f){
    book.remove();
    
}

