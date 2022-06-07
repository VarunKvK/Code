const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" },
    { title: "Post Three", body: "This is Post Three" }
]

function getPost() {
    setTimeout(() => {
        let object = ''
        posts.forEach((post) => {
            object += `<h1>${post.title}</h1>`;
        })
        document.body.innerHTML = object;

    }, 1000)
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject("Error:Something went wrong")
            }
        }, 2000)
    })
}

createPost({ title: "Post Four", body: "This is post four" })
    .then(getPost)
    .catch(err => console.log(err));