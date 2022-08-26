// break for (for loop)
// for(var i = 1; i < 10; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }


// break for (while loop)
// var i = 1;
// while(i < 10){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
//     i++;
// }

//break  for for loop with Array
var items = [23, 34, 45, 23, 46, 76, 45, 56, 34, 26, 110, 22, 86, 27];
for(i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
    if(item > 50){
        break;
    }
}

