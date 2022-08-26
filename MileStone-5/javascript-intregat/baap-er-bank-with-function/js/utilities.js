//step1: add a click event listner to get the button
// step2: create a function for call a id to get element value
// step3: create a function for call a id to get element innertext
// step4: create a function for set new value in previous value
// step5: get the deposite value
// step6: set total deposite value
// step7: get the total balance
// step8: set total balance
// step9: get withdraw value
// step10: set withdraw total balance

//step2
function getInputValueById(elementId){
    const InputField = document.getElementById(elementId);
    const InputValueString = InputField.value;
    const InputValue = parseFloat(InputValueString);
    InputField.value = '';
    return InputValue;
}

//step3
function getTextValueById(elementId){
    const TextField = document.getElementById(elementId);
    const TextFieldString =  TextField.innerText;
    const TextValue = parseFloat(TextFieldString);
    return TextValue;
}

// step4
function setNewValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    // return textElement.innerText;
}