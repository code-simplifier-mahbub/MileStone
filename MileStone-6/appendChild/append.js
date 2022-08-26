document.getElementById('apply-background').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'red'
    }


    
})

document.getElementById('new-friend').addEventListener('click', function(){
    const newContainer = document.getElementById('friends');

    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
        <h3>new friend</h3>
        <p>friend quality added</p>
    `;
    newContainer.appendChild(friend);

})

