// function defaultPara(para1 = 0, para2 = 0){
//     const paraAdd = para1 + para2;
//     console.log(paraAdd);
//     return paraAdd
// }

// const paraAddition = defaultPara(10);
// console.log(paraAddition);

function defaultPara(para1, para2 = 'Hasan'){
    const paraAdd = para1 + ' ' + para2;
    console.log(paraAdd);
    return paraAdd
}

const paraAddition = defaultPara('mahbub');
console.log(paraAddition);