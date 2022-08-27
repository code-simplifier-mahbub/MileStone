// nested object or nested array
const chanachur = {
    name: 'Lokhnath',
    address: {
        lane: '36/4 kochukhet, khilkhet',
        floor: '3rd floor',
        roomNumber: [3, 6, 7]
    },
    testness: 'spicy'
}
const chanachurThikana = chanachur.address.roomNumber[1];
// console.log(chanachurThikana)

//another way
const chanachur2 = {
    name: 'Lokhnath',
    address: {
        lane: '36/4 kochukhet, khilkhet',
        floor: [{floorOne: 1, floorTwo: 2, floorThree: 3,}, {floor1:'one', floor2:'two'} ],
        roomNumber: [3, 6, 7]
    },
    testness: 'spicy'
}
const chanachurFloor = chanachur2.address.floor[1].floor2
// console.log(chanachurFloor)

// optional chaining
const chanachur3 = {
    name: 'Lokhnath',
    address: {
        lane: '36/4 kochukhet, khilkhet',
        floors: [{floorOne: 1, floorTwo: 2, floorThree: 3,}, {floor1:'one', floor2:'two'} ],
        roomNumber: [3, 6, 7]
    },
    testness: 'spicy'
}
const chanachurFloors = chanachur3.address.floors[1]?.flor2
// console.log(chanachurFloors)

//nested array or object completed




