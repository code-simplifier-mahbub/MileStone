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



//step1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step5
    const newDepositValue = getInputValueById('deposit-Field');
    const previousDepositValue = getTextValueById('previous-deposit');
    const newDepositeTotal = newDepositValue + previousDepositValue;
    //step6
    setNewValue('previous-deposit', newDepositeTotal);
    //step7
    const previousTotalBalance = getTextValueById('total-amount');
    //step8
    const newTotalBalance = previousTotalBalance + newDepositValue;
    setNewValue('total-amount', newTotalBalance);

})








