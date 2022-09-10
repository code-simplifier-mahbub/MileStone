/*
    1: console doesn't work outside the function
    2: var is hoisting type and define in the function top
*/

function add(a, b){
    const total = a + b;
    if(b>5){
        const sum = 24 + a + b;
        // console.log(sum)
    }
    else{
        const sum = 2 + a + b;
        var current = sum;
        // console.log(sum)
    }
    // console.log(sum)
    return total;
}
// console.log(total)
add(2, 2)

// i can call this full function before initialization
print5()
function print5(){
    // console.log('print', 5)
}

// cannot call function before initialization expression function
print10()
const print10 = function(){
    // console.log('print', 3)
}


// hoisting in loop
// for(var i = 0; i < 5; i++){
//     console.log('every single value', i)
// }
//var is global type and value exists in outside and it's called hoisting
// console.log('outside output', i)

for(let i = 0; i < 5; i++){
    // console.log('every single value', i)
}
// let is block scope and value doesn't exist in outside
// console.log('outside output', i)



