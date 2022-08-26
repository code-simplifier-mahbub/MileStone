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

//step9
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawValue = getInputValueById('withdraw-field');
    const previousWithdrawValue = getTextValueById('previous-withdraw');
    const newWithdrawTotal = newWithdrawValue + previousWithdrawValue;
    setNewValue('previous-withdraw', newWithdrawTotal);
    //step10
    const previousTotalBalance = getTextValueById('total-amount');
    const newTotalBalance = previousTotalBalance - newWithdrawValue;
    setNewValue('total-amount', newTotalBalance);
})