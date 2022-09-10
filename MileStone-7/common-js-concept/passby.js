// primitive are pass by value
let x = 5; 
let y = 4;

function argumentsPass(){
    x = 3;
    const sum = x * y;
    return sum;
}

// console.log(x)
const result = argumentsPass(x, y);
// console.log(x)

// object are array are pass by refference
let num1 = {name: 'mim', another: 'sheuly'};
let num2 = {name: 'anika', another: 'unknown'}

function namelike(one, two){
    one.name = 'sava'
    two.another = 'jamiya'
    return one.name, two.another;
}

console.log(num1, num2)
console.log(namelike(num1, num2))
console.log(num1, num2)