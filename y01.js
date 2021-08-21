document.getElementById("getPosts").addEventListener('click', getPost)

function getPost() {
    fetch('https://yogeshwaran01-api.herokuapp.com/api/get')
        .then(res => res.json())
        .then(data => {
            let text_string = ""
            data.forEach(element => {
                text_string += `<li>
                <a href=${element.url}>${element.title}</a> at ${element.timestamp}
                </li>`
            });
            document.getElementById('posts').innerHTML = text_string
        })
}