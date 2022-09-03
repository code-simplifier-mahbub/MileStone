const displayUserData = () =>{
    const url =  `https://randomuser.me/api/?gender=female`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.results[0]))
    .catch(error => console.log(error))
}

const displayData = info => {
    console.log(info.gender)
}

//asynchronous functioin

// const loadUserAsync = async() => {
//     const url =  `https://randomuser.me/api/?gender=female`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadUser(data.results[0]);
// }

//with error handler try catch
const loadUserAsync = async() => {
    const url =  `https://randomuser.me/api/?gender=female`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        displayLoadUser(data.results[0]);
    }
    catch (error){
        console.log(error)
    }
}

const displayLoadUser = info => {
    console.log(info.name.first)
}