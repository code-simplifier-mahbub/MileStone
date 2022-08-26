//step1: add a click event handler into button
document.getElementById('button-submit').addEventListener('click', function(){
    // step2: get the email
    // step2.a: get the email value
    const userEmail = document.getElementById('email-add');
    const email = userEmail.value;
    //step2.b: get password
    // step2.c: get password value
    const userPassword = document.getElementById('password-add');
    const password = userPassword.value;
    //email and password value check into a condition and give them a result
    if(email === 'sontan@baap.com' && password === 'secret'){
        //locate the another page for true condition
        window.location.href='account.html'
    }else{
        alert('this bank is not your baaper sompotti')
    }
})