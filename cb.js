const posts = [{
        "title": "First post",
        "body": "post"
    },
    {
        "title": "Second post",
        "body": "post"
    }
]

function getPost() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            console.log(post.title + " => " + post.body)
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}


createPost({
    "title": "Third post",
    "body": "post"
}, getPost)