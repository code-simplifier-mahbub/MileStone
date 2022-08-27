// const let var

//const is a block level variable for everywhere and it can't be re-assaign
const mahbub = 'hasan'; 

// let is a block level variable for a block and let can be re-asaign
let tanzil = 23;
tanzil = 24;

// var can be assaign anywhere and it is a global variable
var hasan = 24;

// spread operator 
const numbers = [23, 54, 64, 43, 75];
// const numbers2 = numbers
const numbers2 = [...numbers]
numbers.push(32)
numbers2.push(53)


// console.log(numbers)
// console.log(numbers2)

 //templete string
 const student = `
    <div>
        <h3>Hi Iam Mahbub Hasan</h3>
        <p>What's Your Name</p>
    </div>
 `;
//  console.log(student)

//default parameter
function goodFunction(salary, bonous = 0){
    const total = salary + bonous;
    return total;
}

const getSalary = goodFunction(20000);
// console.log(getSalary);

//arrow function 
const goodSalary = (salary, bonous) => salary + bonous;
console.log(goodFunction(20000, 500));

//recape complete
