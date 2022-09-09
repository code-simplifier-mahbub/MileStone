console.log('dialogue connected')

const displayAlert = ()=> {
    alert('Alert Show Success')
}

// with confirm you can assaign true or false in a variable
const confirmOpinion = () => {
    const confirmData = confirm('are you sure to stay with us');
    console.log(confirmData);
    if(confirmData === true){
        alert('your mission is success')
    }
    else{
        alert('your mission is unsuccess')
    }
}

// with prompt you can assaign value in a variable
const promptValue = () => {
    const value = prompt('how old are you');
    console.log(value)
}