// step delete heading from textarea with delete text by button
//step 1 select textarea for get event value from textarea
document.getElementById('textBox').addEventListener('keyup', function(event){
    const getValue = event.target.value;
    console.log(getValue)
    // step 2 get delete button for delete text
    const deleteText = document.getElementById('deleteButton');
    // step3 condition with disable property
    if(getValue ==='delete'){
        deleteText.removeAttribute('disabled');

    }else{
        deleteText.setAttribute('disabled', true)
    }
    // delete heading
    document.getElementById('deleteButton').addEventListener('click', function(){
        const deleteHeading = document.getElementById('heading');
        deleteHeading.style.display = 'none';
    })
})






// step heading delete
// document.getElementById('delete-button').addEventListener('click', function(){
//     const deleteText = document.getElementById('heading');
//     deleteText.style.display = 'none';
// })