// step1 select list item for get all list item with for loop
// const items = document.getElementsByClassName('list-item');
//     for(const item of items){
//         item.addEventListener('click', function(event){
//             event.target.parentNode.removeChild(event.target)
//         })
//     }

// good way to add and remove element
const listContainer = document.getElementById('list-container').addEventListener('click', function(event){
//    console.log(event.target) // this event is click element event
//    console.log(event.target.parentNode) // this event is parent node(ul)
    event.target.parentNode.removeChild(event.target) // remove event(li element remove)
})



    const addItem = document.getElementById('addBtn').addEventListener('click', function(){
        const listContainer = document.getElementById('list-container');
        const item = document.createElement('li');
        item.innerText = "another item added";
        item.classList.add('list-item');
        listContainer.appendChild(item)
    })