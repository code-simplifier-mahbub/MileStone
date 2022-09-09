document.getElementById('btn-add-name').addEventListener('click', function(){
    const storageField = document.getElementById('text-field');
    const storageValue = storageField.value;
    // console.log(storageValue);

    localStorage.setItem('name', storageValue)
})

document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name')
})

document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;

    localStorage.setItem('age', ageValue);
})

document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('age')
})

document.getElementById('btn-clear').addEventListener('click', function(){
    localStorage.clear()
})