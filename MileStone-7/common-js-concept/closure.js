function closure(){
    let counter = 0;
    //closure
    return function(){
        counter ++;
        return counter;
    }
}
//another counter

const closureValue = closure();
console.log(closureValue())
console.log(closureValue())
console.log(closureValue())
console.log(closureValue())

const closureValue2 = closure();
console.log(closureValue2())
console.log(closureValue2())
