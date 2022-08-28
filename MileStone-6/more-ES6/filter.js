const school = [
    {name: 'DholaMia', class: 'six', roll: 20},
    {name: 'LalMia', class: 'seven', roll: 10},
    {name: 'KalaMia', class: 'eight', roll: 30}
]

// use filter
const filterRoll = school.filter(info => info.roll > 10);

console.log(filterRoll)