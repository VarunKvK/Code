const itemlist = {
    data: [
        {
            id: 01,
            name: 'Duck',
            image: 'duck.png',
            cost: 150
        },
        {
            id: 02,
            name: 'DogFrame',
            image: 'dog1.png',
            cost: 50
        },
        {
            id: 03,
            name: 'Bone',
            image: 'boneproduct.png',
            cost: 100
        },
        {
            id: 04,
            name: 'CatTreat',
            image: 'cattreat.png',
            cost: 250
        }
    ]
}


const productlist = document.querySelector('.productlist')

itemlist.data.map(details => {
    const productdiv = document.createElement('div')
    productdiv.classList.add('productdiv')
    productlist.appendChild(productdiv);

    const productimage = document.createElement('img')
    productimage.src = details.image;
    productimage.classList.add('productimage')
    productdiv.appendChild(productimage)

    const productdetail = document.createElement('h1')
    productdetail.textContent = details.name;
    productdetail.classList.add('productdetail')
    productlist.appendChild(productdetail)

    const productcost = document.createElement('h1')
    productcost.textContent = details.cost + ' Rs';
    productcost.classList.add('productcost')
    productlist.appendChild(productcost)

});

const search = document.querySelector('.search');

search.addEventListener('click', filterit)

function filterit() {
    const searchitems = document.querySelector('.searchitems');
    const productdetails = document.querySelectorAll('.productdetail');
    const productdiv = document.querySelectorAll('.productdiv');
    const searchitemvalue = searchitems.value.toUpperCase();
    const productname = productdetails;

    productname.forEach((product, index) => {
        if (product.innerHTML.includes(searchitemvalue)) {
            productdiv[index].classList.remove("hide")
            console.log("exists")
        } else {
            productdiv[index].classList.add("hide")
            console.log('doesnt exist')
        }
    })
}

