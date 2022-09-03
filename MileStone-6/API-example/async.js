const displayUserData = () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

displayUserData();