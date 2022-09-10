function greeting(greetingParameter, name){
    //call back function
    greetingParameter(name);
}

function greetingByName(namePara){
    console.log('Good Mornign', namePara)
}

function greetingMorning(nameParameter){
    console.log('Good allTime', nameParameter)
}



greeting(greetingByName, 'Anika')
greeting(greetingMorning, 'mim')