//create a array for carousel
//timer set with setInterval
//get carousel id
//initialize a variable value 0 for counter
//increament imgindex
//condition with img length
//then get images with imgindex 
// set atribute src with imgLength

const images = [
    'images/images-1.jpg',
    'images/images-2.jpg',
    'images/images-3.jpg',
    'images/images-4.jpg',
    'images/images-5.jpg',
]
let imgIndex = 0;
const imgLink = document.getElementById('js-carousel');
// console.log(imgLink)
setInterval(() => {
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    // console.log(imgIndex)
    const imgLength = images[imgIndex]
    imgLink.setAttribute('src', imgLength)
    imgIndex++
}, 1000);