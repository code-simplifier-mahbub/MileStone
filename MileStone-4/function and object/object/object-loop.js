var myShope = {
    phone: 23,
    laptop: 33,
    mouse: 34,
    keyboard: 53,
    pad: 63,
    microphone: 35
}
var shopeItem = Object.keys(myShope);
var itemCount = Object.values(myShope);
// console.log(shopeItem);
// console.log(itemCount);

// for(var i = 0; i < shopeItem.length; i++){
//     var showItem = shopeItem[i];
//     var showCount = itemCount[i];
//     console.log(showItem, showCount);
// }

// hard way
// for(i = 0; i < shopeItem.length; i++){
//     var itemName = shopeItem[i];
//     var itemValue = myShope[itemName];
//     console.log(itemName, itemValue);
// }

//easy way
// for(var shopeItem in myShope){
//     var productValue = myShope[shopeItem];
//     console.log(shopeItem, productValue);
// }

// function add(){
//     console.log('i am hungry');
// }

// add();

function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
  }
  console.log(movie());