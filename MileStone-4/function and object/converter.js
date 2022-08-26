function incheTofeet(inche){
    const feet = inche / 12;
    return feet;
}

const defineFeet = 24;
const getFeet = incheTofeet(defineFeet);
console.log(getFeet, 'feet');