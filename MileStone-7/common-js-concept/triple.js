//type coersion
//type conversion
//type casting

/*
*double eqaual
    1: == double equal chack only vlaue
    1: == convert string to number and chack a truth number
    3: == convert boolean value into 1 or 0 and chack truth
    4: == can compare only primitive type ({}, [] can not compare) doesn't work non primitive
    5: == can compare ({} or []) when they are reffer such as (first = [] and second = first)
*tripple equal
    1: === triple equal chack value and type
    2: === all time check type and value
    3: always use === 

*/


const first = [];
const second = first;

if(first == second){
    console.log('value are equal')
}
else{
    console.log('value are not equal')
}