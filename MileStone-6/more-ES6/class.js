// constructor 
class Teacher{
    name;
    desegnity = 'webdev'
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    location;
    startSupportSession(time){
        console.log(`please start the support session at ${time} clock`)
    }
    service = 'availavle'
    startQuize(module){
        console.log(`please answer the all quize for ${module}`)
    }
}

const hasan = new Teacher('mahbub', 'Tangail');
console.log(hasan);
hasan.startSupportSession(10)
hasan.startQuize(30);
console.log(hasan)

