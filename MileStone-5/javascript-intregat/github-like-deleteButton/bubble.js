document.getElementById('list-item-2').addEventListener('click', function(event){
    console.log('list item clicked');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('list-item-2').addEventListener('click', function(event){
    console.log('list item clicked');
})
document.getElementById('list-item-2').addEventListener('click', function(event){
    console.log('list item clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('list ul clicked')
})

document.getElementById('list-section').addEventListener('click', function(){
    console.log('list section clicked')
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body clicked')
})