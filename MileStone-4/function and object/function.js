// //function declaration

// functoin functionName(parameters){
//     function body;
//     return value;
// }

// //call function

// functionName();

// function add(){
//     console.log('ami kisu jani na');
// }

// add();

// function addPara(money){

//     console.log('mama singara koi');
//     console.log(money + ' taka dicen naki');

// }

// addPara(200);



// function singara(money){
//     console.log(money);
//     console.log('mama abar singara koi');
// }


// var taka = 299;
// singara(taka);

// function addMoney(money1, money2){
//     console.log(money1 + money2);
//     var sum = money1 + money2;
//     return sum;
// }

// addMoney(22,  34);

function getAverage(assingnment1, assingnment2, assingnment3){
    const total = assingnment1 + assingnment2 + assingnment3;
    const average = total / 3;
    return average;
    
}

const assinment1Mark = 60;
const assinment2Mark = 58;
const assinment3Mark = 60;

const myScore = getAverage(assinment1Mark, assinment2Mark, assinment3Mark);

console.log(myScore);
