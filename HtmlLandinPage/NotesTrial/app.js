const addtodos=document.querySelector('.addtodos')
const addbutton=document.querySelector('.addbutton')

addbutton.addEventListener('click',createtodo)

function createtodo(){
    const tododiv=document.createElement('div')
    tododiv.classList.add('creatediv')
    addtodos.appendChild(tododiv)
    console.log('created')
}