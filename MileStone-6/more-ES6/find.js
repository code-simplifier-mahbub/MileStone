const school = [
    {name: 'DholaMia', class: 'six', roll: 20},
    {name: 'LalMia', class: 'seven', roll: 10},
    {name: 'KalaMia', class: 'eight', roll: 30}
]

// filter cousine name is find. find use for only one outpur from condition
const filterRollFind = school.find(info => info.roll > 10) 
console.log(filterRollFind)