const todolistinput=document.querySelector('.todolistinput');
const addtodolist=document.querySelector('.addtodolist');
const itemcontainer=document.querySelector('.itemcontainer');

//adding items to list
addtodolist.addEventListener('click',additemstolist)
itemcontainer.addEventListener('click',buttonfunction)

function additemstolist(){
    
    //divitemcreated
    const itemdiv=document.createElement('div')
    itemdiv.classList.add('todolistiadded');

    //itemsdescription
    const itemlist=document.createElement('li')
    itemlist.textContent=todolistinput.value;
    itemlist.classList.add('liststyle')
    itemdiv.appendChild(itemlist)
    //deleteicon
    const deleteicon=document.createElement('button')
    deleteicon.innerHTML='<span class="iconify" data-icon="fluent:delete-20-filled" style="color: white;"></span>'
    deleteicon.classList.add('deleteicon')
    itemdiv.appendChild(deleteicon)

    //completeicon
    const completeicon=document.createElement('button')
    completeicon.innerHTML='<span class="iconify" data-icon="carbon:task-complete" style="color: white;"></span>'
    completeicon.classList.add('completeicon')
    itemdiv.appendChild(completeicon)

    itemcontainer.appendChild(itemdiv);
}

function buttonfunction(e){
    const item=e.target;
    console.log(item.classList[0])
    console.log(item.parentElement)
    if(item.classList[0]==='deleteicon'){
        const todo=item.parentElement;
        todo.classList.add('itemanimatedremove')
        todo.addEventListener('transitioneend',()=>{
            todo.remove();
        })
    }
    if(item.classList[0]==='completeicon'){
        const todo=item.parentElement;
        todo.classList.add('itemanimatedcomplete');
    }
}