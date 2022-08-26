//step1: add event listener by click in deposite button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step2: get the value from input
    const depositField = document.getElementById('deposit-Field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    // error handler

    //one way
    // if(depositField.value !== 'number' || depositField.value === ''){
    //     alert('fazlami bad diye asol sonkha dau');
    //     depositField.value = '';
    //     return;
    // }
    // another way and easy way
    if(isNaN(newDeposit)){
        alert('please provide a valid number');
        return;
    }
   
    //step3: get the previous deposite and get value
    const previousDepositeField = document.getElementById('previous-deposit');
    const previousDepositString = previousDepositeField.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    
    //step4: add the new deposit value in previous deposite value

    const currentDepositTotal = previousDeposit + newDeposit;
    previousDepositeField.innerText = currentDepositTotal;

    // step5: add the current deposit total into Total amount
    const totalAmountField = document.getElementById('total-amount');
    const totalAmountFieldString = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountFieldString);
    
    // step6: add the total deposit value in total amount
    const currentBalanceTotal = totalAmount + newDeposit;
    totalAmountField.innerText = currentBalanceTotal;

    //step7: clear the input deposite field
    depositField.value = '';



    
})