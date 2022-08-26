// spread operator
const numbers = [23,65, 66, 76,28];
// const numbers2 = numbers;
// const numbers2 = [numbers]
const numbers2 = [...numbers]

numbers.push(10);
numbers2.push(20);
console.log(numbers);
console.log(numbers2);
// //use spread operator
// console.log(...numbers);
const allNumbers=[10,20,30,40,50,60,70 ];
const maxNumber = Math.max(...allNumbers)
console.log(maxNumber)

// practice make a programme easy man just practice
