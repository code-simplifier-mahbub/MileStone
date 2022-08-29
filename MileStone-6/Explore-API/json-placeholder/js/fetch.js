// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(onclick){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log('call hoice'))
}