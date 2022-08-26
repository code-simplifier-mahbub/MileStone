//option 2
//importent we will use sometime
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option 3

const buttonBlue = document.getElementById('make-blue');
buttonBlue.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3 another direct function

const crimson = document.getElementById('make-crimson');
crimson.onclick = function(){
    document.body.style.backgroundColor = 'crimson'
}

//option 4
const makeGrayButton = document.getElementById('make-gray');
// console.log(makeGrayButton)
makeGrayButton.addEventListener('click', makeGray);

function makeGray(){
    document.body.style.backgroundColor = 'gray';
}

//option 4 another
const makeBlackButton = document.getElementById('make-black');
// console.log(makeBlackButton)
makeBlackButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})

// option 4 we use it most
//importent 
const makeSilver = document.getElementById('make-silver').addEventListener('click', function(){
    document.body.style.backgroundColor = 'silver';
})