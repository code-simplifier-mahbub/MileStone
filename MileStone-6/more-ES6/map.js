const numbers = [2, 4, 6 ,7, 8, 3, 5];

function getDouble(numbers){
    const output = [];
    for(const number of numbers){
        const doubleIt = double(number);
        output.push(doubleIt)
    }
    return output;
}

// function double(number){
//     const double = number * 2;
//     return double;
// }
//another way or arrow function for double all number value
const double = num => num * 2;

// get numbers all value as a array with map function and it is very small code
const doubleIt = numbers.map(double);
const double2 = [2, 5, 3].map(double);
console.log(double2)
console.log(doubleIt)

//console for get get double function
const result = getDouble(numbers);
// console.log(result);