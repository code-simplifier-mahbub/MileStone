function isEven(number){
    let remainder = number % 2;
    if(remainder === 0){
        return true;
    }else{
        return false;
    }
}
let evennumber = isEven(35);
console.log(evennumber);
// if(evennumber == true){
//     alert("your number is even");
// }else{
//     alert("your number is odd");
// }