function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }else{
        return false;
    }
}

const myYear = isLeapYear(2002);
if(myYear === true){
    console.log('my year is leap year');
}else{
    console.log('my year is not a leap year');
}