console.log("hello world!");
console.log(typeof "Ave");
console.log(typeof 42);
console.log(typeof true);

//Strings
const myVariable="Mathematics";

//The length property
console.log(myVariable.length);
console.log("Every good boy does fine.".length);
console.log(myVariable.charAt(5)); //starts from 0
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5,8));
console.log(myVariable.toLowerCase());
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("div"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John,Joe,Dave".split(","));
console.log("Every good boy does fine".split (" "));

//Numbers

const myNumber=42;
console.log(myNumber);
const myFloat=42.01;
console.log(myFloat);
const mySting="42";
console.log(myNumber===myFloat); //false
console.log(mySting+3); //432
console.log(Number(mySting)+3); //45
console.log(Number(mySting)===myNumber); //true
console.log(Number("Dave"));//NaN (not a number)
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1 
console.log(Number(false)); //0 zero is equal to false
console.log(Number.isInteger(myNumber)); //true
//console.log(Number.parseFloat(myString));
//console.log(Number.parseFloat(myFloat));
//console.log(Number.parseInt(myFloat));
//console.log(typeof myFloat.toString());

//Math Methods
console.log(Math.PI); //3,14159
console.log(Math.trunc(Math.PI)); //3
console.log(Math.round(3.5)); //4
console.log(Math.ceil (3.4)); //4 rounds the value up
console.log(Math.floor(Math.PI));//3 rounds the value down
console.log(Math.pow(2,4));//16
console.log(Math.pow(2,10));//1024
console.log(Math.pow (5,2));//25
console.log(Math.min (2,5,9));//2
console.log(Math.max(2,0,5));//5
console.log(Math.random());//gives a random nr from 0-1
console.log(Math.floor(Math.random()*10)+1); //random number from 1-10
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

//First Code Challenge
//Write code that returns a random letter from your name
const myName="Ave";
console.log(typeof "Ave"); //string
console.log("Ave".charAt());
console.log(myName.length); //3
console.log(Math.floor(Math.random()*3)+1);
console.log(Math.floor(Math.random()*3)+1);
console.log(Math.floor(Math.random()*3)+1);
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));
console.log("Ave".charAt(Math.floor(Math.random()*3)));

const anyName="Johnathan";
console.log(anyName.length);
console.log(anyName.charAt(Math.floor(Math.random()*anyName)));

//If Statements

//if(condition){
    //run some code
//}else {
    //run some other code
//}

let customerIsBanned=false;
let soup="chicken noodle soup";
let cracers=true;
let replay;
if(customerIsBanned){
    replay="No soup for you!";
}else if(soup&&cracers){
    replay=`Here's your order of ${soup} & crackers.`;
}else if(soup){
    replay=`Here's your order of ${soup}`;

} else{
    replay="Sorry, we' are out of soup.";
}
console.log(replay)

//Conditions:If Statements
let testScore=59;
let collegeStudent=true;
let grade;
if(testScore>=90){
    grade="A";
}else if(testScore>=80){
    grade="B";
}else if(testScore>=70){
    grade="B"
}else if(testScore>=60){
        grade="B"
}else{
    if(collegeStudent){
        grade="U";
    }else{
        grade="F";
    }
}
console.log(grade);


//Decision Tree
if(playerOne===computer){
    //tie game
}else if(computer==="rock"){
    if(computer==="paper"){
        //computer wins
    }else{
        //playerOne wins
    }
}else if(playerOne==="paper"){
    if(computer==="scissors"){
        //computer wins
    }else{
        //playerOne wins
    }
}else{
    if(computer==="rock"){
        //computer wins
    }else{
        //playerOne wins
    }
}







