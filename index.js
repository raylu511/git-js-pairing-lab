//Code your solutions in this file

// 1
function fiveToOneHundred () {
    for(let i=5; i<=100; i++){
        console.log(i);
    }
}

// 2
function multiplesOfThree(){
    for(let i=3; i<=100; i+=3)
    console.log(i)
}

// 3
function multiplesOfThreeOrFive(){
    for(let i=1; i<=100; i++){
        if(i%3==0 || i%5==0){
            console.log(i);
        }
    }
}

// 4
function untilNum(int){
    for(let i=1; i<=int; i++) 
    console.log(i)
    
}

// 5
function multiply(firstNum, secondNum){
    return firstNum*secondNum;
}

// 6
function add(Num1,Num2){
    if(Num1===Num2) {
        return ((Num1+Num2)*3)
    }
    return Num1+Num2;
}

// 7
function isNegative(number){
    if(number<0) return true;
    return false;
}

// 8 
function triangleArea(h,b){
    return h*b/2
}

// 9
function betweenTwentyAndFourty(number){
    if(number>=20 && number<=100) {
        return true;
    }
    return false;
}

// 10
function largest(Num1,Num2,Num3){
    return Math.max(Num1,Num2,Num3)
}

// 11
function printTime(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

// 12
function isLeapYear(year){
    if((year%4==0) && (year%100!=0) || (year%400==0)){ return true;}
    return false;
}

// 13
function getExtention(file){
    let filename=file.split(".")
    return "." + filename[1]
}



// multiplesOfThree();
// multiplesOfThreeOrFive();
// untilNum(42) 
// console.log(multiply(2,4));    8
// console.log(multiply(10,-5));  -50
// console.log(multiply(3,7.5));  22.5
// console.log(add(6,6)); // 36
// console.log(isNegative(3)); //false
// console.log(isNegative(-2)) //true
// console.log(isNegative(Math.PI)) //false
// console.log(triangleArea(6,8)) // 24
// console.log(betweenTwentyAndFourty(4)) //false 
// console.log(betweenTwentyAndFourty(21)) //true
// console.log(betweenTwentyAndFourty(99)) //true
// console.log(betweenTwentyAndFourty(101)) //false
// console.log(largest(41,108,86)) // 108
// printTime(); //Prints the current time in HH/MM/ss format
// console.log(isLeapYear(2000)); // true 
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2020)); //true
// console.log(isLeapYear(1999)); //false
// console.log(getExtention("hello.txt")) //.txt
// console.log(getExtention("app.js"))    //.js
// console.log(getExtention("README.md")) //.md