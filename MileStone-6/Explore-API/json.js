const objectFile = {
    name: 'mahbub',
    country: 'Bangladesh',
    shop: {
        laptop: 'hp',
        charger: 'adapter'
    },
    revenue: 4500
}
const stringifyObject = JSON.stringify(objectFile);
console.log(objectFile);
console.log(stringifyObject);
const objectJSON = JSON.parse(stringifyObject);
console.log(objectJSON)