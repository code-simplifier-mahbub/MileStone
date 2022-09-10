/*
    there are 8 ways to get undefined
    1.if variable is that  not initialized will give undefined
    2.function with no return will give undefined 
    3. parameter that is not passed will give undefined
    4.if return has nothing on the right side will give undefined
    5. property that doesn't exists on an object will give undefined
    6. accessing array element outside the index range
    7. deleting an element in array will give undefined
    8. set a value directly to undefined
*/

//1
let c;
// console.log(c);

//2
function second(a, b){
    const total = a + b;
    // console.log(total);
    
}
// console.log(second(10 , 44))

//3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
// third(4, 5)

//4
function noNegative(a, b){
    if(a<0 || b<0){
        return
    }
    return a + b;
}
const output = noNegative(-3,4)
// console.log(output)

//5
const student = {name:'mahbub', id:234, ranking: 'first'}
// console.log(student.name, student.salary)

//6
const number = [34, 65, 64];
//I should never use delete array item, if needed I need to use splice method
delete number[1]

// console.log(number[1], number[2], number[4]);
// console.log(number)

const undef = undefined;
// console.log(undef)
// console.log(typeof undef)

const nullValue = null;
//type of null vlaue is an object
// console.log(typeof nullValue)
// it is a null value
console.log(nullValue)
