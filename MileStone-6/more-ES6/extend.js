class Instructor {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    feadback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}



class Supporter extends Instructor{

    desegnity = 'webdev'
    service = 'availavle'

    constructor(name, location){
        super(name, location);
    }

    startSupportSession(time){
        console.log(`please start the support session at ${time} clock`)
    }
   
    startQuize(module){
        console.log(`please answer the all quize for ${module}`)
    }
}

class Developer extends Instructor{

    desegnity = 'webdev'
    service = 'availavle'

    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }

    developApp(app){
        console.log(`please make a ${app}`)
    }
   
    releaseApp(release){
        console.log(`please release ${release}`)
    }
}

class Jobplacement extends Instructor{

    desegnity = 'webdev'
    service = 'availavle'

    constructor(name, location, job){
        super(name, location);
        this.tech = job;
    }

    findJob(job){
        console.log(`please make a ${job}`)
    }
   
    jobFeedback(jobAvailable){
        console.log(`please release ${jobAvailable}`)
    }
}

const Tanzil = new Supporter('Tanzil Mia', 'Uganda', 'Xenon');
// console.log(Tanzil);
Tanzil.feadback();

const Mahbub = new Developer('Mahbub Hasan', 'Nigeria', 'Krypton');
console.log(Mahbub);
Mahbub.feadback();