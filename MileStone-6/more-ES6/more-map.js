const numbers = [24, 45, 32, 56, 66];
const half = numbers.map(number => number / 2);
const third = numbers.map(number => number / 3);
// console.log(half);
// console.log(third);

const school = [
    {name: 'DholaMia', class: 'six', roll: 20},
    {name: 'LalMia', class: 'seven', roll: 10},
    {name: 'KalaMia', class: 'eight', roll: 30}
]

// const studentName = school.map(info =>info.name);
// const studentName = school.map(info =>info.class);
// const studentName = school.map(info =>info.roll);
const studentName = school.map(info =>info.name[0]);
// value in new array
console.log(studentName);
// spread value without array
console.log(...studentName);
