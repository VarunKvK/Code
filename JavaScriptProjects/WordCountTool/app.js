const typeContainer=document.querySelector('.type-container');
const counts=document.querySelector('.counts');
const clearbtn=document.querySelector('.clearbtn');

clearbtn.addEventListener('click',clearbtns)
typeContainer.addEventListener('keyup',wordcount)

function wordcount(){
    let word=typeContainer.value;
    let words=word.trim();
    const letter=words.split(" ");
    counts.textContent=letter.length;
    console.log(letter.length);
}
function clearbtns(){
    typeContainer.value=" ";
    counts.textContent='0';
    console.log('click');
}

