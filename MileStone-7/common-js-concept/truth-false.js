/*
//truthy value
    1: truth
    2: any number is truthy
    3: any number is truthy other than 0
    4: ' ' (any string other than empty string)
    5: '5' 'false' (any string is truth)
    6: any object or empty object
    7: any array or empty array
    8: bang(!) false are truthy
    9: bang bang(!!value is truthy)

//falsy value
    1: false
    2: 0 
    3: '' (empty string)
    4: undefined value is falsy
    5: null
    6: !
*/

const x = {class: 9};

if(!!x){
    console.log('value is truthy')
}
else{
    console.log('value is falsy')
}