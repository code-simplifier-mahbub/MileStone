function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPost(data))
}



function getPost(posts){
    const containerPost = document.getElementById('container-post');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4> ${post.userId}</h4>
        <h5> ${post.title} </h5>
        <p>description: ${post.body}</p>
        `;
        containerPost.appendChild(postDiv);

    }
}


loadPost()