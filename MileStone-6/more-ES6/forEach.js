const school = [
    {name: 'DholaMia', class: 'six', roll: 20},
    {name: 'LalMia', class: 'seven', roll: 10},
    {name: 'KalaMia', class: 'eight', roll: 30}
]
// use map
// const studentInfo = school.map(info => info.name);

// use forEach and it can't return value
// const studentInfo = school.forEach(info => info.name);
const studentInfo = school.forEach(info => console.log(info.name));

// console.log(studentInfo)