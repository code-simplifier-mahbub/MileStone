var computer = {
    monitor: 3,
    cpu: 3,
    mouse: 11,
    keyboard:22,
    pad: 33,
    cleaner: 34
}
// // one way
// console.log(computer);
// console.log(computer.monitor)

// property and value output 
// one way
// console.log(Object.keys(computer));

// other way
// var keyOutput = Object.keys(computer);
// console.log(keyOutput);

// var keyValue = Object.values(computer);
// console.log(keyValue)

//another way
// console.log(computer['mouse']);

// var getValue = 'mouse';
// var mouseCount = computer[getValue];
// console.log(mouseCount);

//change value

// var valueChange = computer['mouse'] = 20;
// console.log(valueChange);

var getValue = 'pad';
var changeValue = computer[getValue] = 64;
console.log(changeValue);
console.log(computer);