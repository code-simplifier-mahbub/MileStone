// arrow function
const sum = (first, second) => first + second;

//another arrow function
const fullName = (first, second) => first + ' ' + second;

//another arrow function
const multiply = (first, second) => first * second;

//anynomus arrow function 
const getPie = () => 3.1416;
// const result = getPie();
// console.log(result)
// console.log(getPie())

// single parameter arrow function
const getDouble = (one) => one * 2;

// const result = getDouble(3);
// console.log(result)

// single parameter without paranthesis bracket
const sameDouble = one => one * 2;
// console.log(sameDouble(2));

//multiline arrow function
//if you declare multiline arrow function, use return
const multilineArrow = (first, second) => {
    const sum = first + second;
    const multiply = sum * first;
    const divided = multiply / 2;
    return divided;

}

const result = multilineArrow(3, 4);
console.log(result)
