const head=document.querySelector('.heading')
const heading=document.querySelector('.head')
const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" },
    { title: "Post Three", body: "This is Post Three" }
]

function getPost() {
    setTimeout(() => {
        let object = ''
        let object2 = ''
        posts.map((post) => {
            object += post.title;
            object2 += post.body;
        })
        heading.textContent = object;
        head.textContent = object2;

    }, 1000)
}

getPost()