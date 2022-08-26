//destructuring object
const fish = {
    name: 'Hilsha King',
    color: 'silver',
    phone: '0170456'
}

// console.log(fish.name)

// //another way
// const phone = fish.phone;
// console.log(phone)

// another way
// const {color} = fish
const {color, phone} = fish;
// console.log(phone)

// destructuring array
const weight = [32, 57, 23, 72];
// const [sotu, motu , gittu, pikku] = weight;
const [sotu, motu , gittu, pikku] = weight;
// console.log(gittu)


// destructuring with function
function getName(){
    return ['Atif', 'Fateh Ali']
}

const [taire, naire] = getName();
console.log(naire)