function numbers(a, b, c){
    // console.log(arguments)
    console.log(...arguments)
    const sum = a + b + c;
    console.log(sum)
}

numbers(2, 5, 8, 4, 6, 9, 7)