//searhbaar animation
const headerSearchbar = document.querySelector('.header-searchbar');
headerSearchbar.addEventListener('mouseenter', () => {
    headerSearchbar.classList.add('header-searchbars');
})
headerSearchbar.addEventListener('mouseleave', () => {
    headerSearchbar.classList.remove('header-searchbars');
})


//productlist

const featureproduct = document.querySelector('.products');
const productstext = document.querySelector('.productstext');
const products = [
    {
        img: './images/boneproduct.png',
        name: 'Bone Toy for Dogs',
        cost: 250
    },
    {
        img: './images/duck.png',
        name: 'Duck Toy for Dogs',
        cost: 250
    },
    {
        img: './images/cattreat.png',
        name: 'Gatuna Cat Treats',
        cost: 250
    }
]

//productimage

function imageproductmapping() {
    products.map(product => {
        console.log('ProductImage', product.img);
        //div content for products description
        const createdivproduct = document.createElement('div');
        createdivproduct.classList.add('productdiv');
        featureproduct.appendChild(createdivproduct);
        //images of products
        const createimageproduct = document.createElement('img');
        createimageproduct.src = product.img;
        createimageproduct.classList.add('images');
        createdivproduct.appendChild(createimageproduct);
    })
}

imageproductmapping();

function productdetails() {
    products.map(product => {
        console.log('ProductName', product.name)
        //h1 for productname
        const creatdivtext = document.createElement('div');
        const createname = document.createElement('h1');
        productstext.appendChild(creatdivtext)
        createname.classList.add('textstyle')
        creatdivtext.appendChild(createname)
        createname.textContent = product.name

        //cost of the products
        const createcost = document.createElement('h1');
        creatdivtext.appendChild(createcost)
        createcost.textContent = product.cost
        createcost.classList.add('coststyle')

        const rupee = document.createElement('h2');
        rupee.innerHTML = 'Rs'
        rupee.classList.add('rupeestyle')
        creatdivtext.appendChild(rupee)
    })
}

productdetails();
//gsap animation


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
		'X-RapidAPI-Key': '7e3fb1e363mshe3ce27bf13b0029p178340jsnacfa41f12904'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));