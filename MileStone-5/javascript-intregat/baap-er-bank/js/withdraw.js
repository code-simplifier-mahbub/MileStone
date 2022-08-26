// step1: add a event listener into withdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //step2: get the new withdraw amount value
    const newWithdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = newWithdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    // error handler
    if(isNaN(newWithdraw)){
        alert('please provide a valid number');
        newWithdrawField.value = '';
        return;
    }


// step5 come for error handler 
    // step5: get the total amount balence and set new withdraw amount by decrement
    const totalAmountField = document.getElementById('total-amount');
    const totalAmountFieldString = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountFieldString);

        // condition error handler
        if(newWithdraw > totalAmount){
            alert('baap er bank a ato taka nai');
            newWithdrawField.value = '';
            return;
        }

    
    //step3: get the previous withdraw amount
    const previousWithdrawField = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdrawField.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    //step4: set the new withdraw amount in previous withdraw amount
    const currentWithdraw = previousWithdraw + newWithdraw;
    previousWithdrawField.innerText = currentWithdraw;

    // step5: get the total amount balence and set new withdraw amount by decrement

    // const totalAmountField = document.getElementById('total-amount');
    // const totalAmountFieldString = totalAmountField.innerText;
    // const totalAmount = parseFloat(totalAmountFieldString);


    // decrement the total amount with withdraw amount
    const currentBalanceTotal = totalAmount - newWithdraw;
    totalAmountField.innerText = currentBalanceTotal;
    



    //step7: clear the new withdraw value in input field
    newWithdrawField.value = '';

})