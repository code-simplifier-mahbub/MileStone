// create a function for new reauest 
// display data into a function with create a loop for get data n time
// get the container which will use for appned anothers div for more data
// create div for assign data
const randomData = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayRandomUsers(data.results))
    
}

const displayRandomUsers = users => {
    const containerDiv = document.getElementById('random-container');
    for(const user of users){
        const divUser = document.createElement('div');
        divUser.innerHTML = `
        <h3>userName:${user.name.first}${user.name.last}</h3>
        <h3>userEmail:${user.email}</h3>
        <p>userGender:${user.gender}</p>
        `;
        containerDiv.appendChild(divUser);
        console.log(user)
    }
}