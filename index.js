//Code your solutions in this file
function fiveToOneHundred () {
    for(let i=5; i<=100; i++){
        console.log(i);
    }
}

//fiveToOneHundred();

function multiplesOfThree(){
    for(let i=3; i<=100; i+=3)
    console.log(i)
    
}
// multiplesOfThree();

function multiplesOfThreeOrFive(){
    for(let i=1; i<=100; i++){
        if(i%3==0 || i%5==0){
            console.log(i);
        }
    }
}

// multiplesOfThreeOrFive();

function untilNum(int){
    for(let i=1; i<=int; i++) 
    console.log(i)
    
}
// untilNum(42)

function multiply(firstNum, secondNum){
    return firstNum*secondNum;
}

// console.log(multiply(2,4));    8
// console.log(multiply(10,-5));  -50
// console.log(multiply(3,7.5));  22.5

function add(Num1,Num2){
    if(Num1===Num2) {
        return ((Num1+Num2)*3)
    }
    return Num1+Num2;
}
// console.log(add(6,6)); // 36

function isNegative(number){
    if(number<0) return true;
    return false;
}
// console.log(isNegative(3)); //false
// console.log(isNegative(-2)) //true
// console.log(isNegative(Math.PI)) //false
function triangleArea(h,b){
    return h*b/2
}
console.log(triangleArea(6,8))
    //returns 17.5
   //returns 24)