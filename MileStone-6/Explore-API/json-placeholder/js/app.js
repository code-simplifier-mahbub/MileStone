function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => getData2(data))
}

function getData2(data){
    console.log(data)
}