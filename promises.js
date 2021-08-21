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

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false

            if (!error) {
                resolve()
            } else {
                reject("Error :)")
            }

        }, 2000)
    })

}

// createPost({
//         "title": "Third Post",
//         "body": "post"
//     }).then(getPost)
//     .catch(error => console.log(error))


async function init() {
    await createPost({
        "title": "Third Post",
        "body": "post"
    })
    getPost()
}

init()