//simple method
// sum in increment method
// let sum = 0;
// for(let i = 1; i <= 30; i++){
//     sum = sum + i;
// }
// console.log(sum)

// sum in decrement method

// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
//     // console.log(sum)
// }

// console.log(sum)

// sum in recursion(funtion call into a function) method

// function sum(i){
//     if(i === 0){
//         return 0;
//     }
//     console.log(i);
//      return i + sum(i-1)
// }
// const result = sum(5);
// console.log(result);

//sum in recurtion (function call into a function)method
function factorial(i){
    if(i===1){
        return 1;
    }
    // console.log(i);
    return i * factorial(i-1);
    
}

// const result = (factorial(5));
// console.log(result);

// function compare(a, b) {
//     if (a === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
// //    const result = compare(15, "15");
//    console.log(result);
// function compare(a, b) {
//     if (a.toString() === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result = compare(25, 25);
//    console.log(result);
// console.log("123" + 123);
let a="hi"
let b="there"
console.log(a+b)