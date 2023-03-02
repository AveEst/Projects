//Data Types: undefined, null, boolean, string, symbol, number and Object

//Multiline comment */ */

1. Assign variables
3 ways to declare a variable:
var;let;const 

var myName="Ave" (all programm)
let ourName="feeCodeCamp" (only in scope where one uses it)
const pi=3.14 (can never change)

console.log (lets see things on console)

var a=5;
var b=10;
var c= "I am a";

var srudyCapVar = declarations

Numbers var sum= 10+10;
var difference=45-10;
var product=8*10;
var quotient=66/22;

var myVar=11;
Incrementing numbers= myVar=myVar+1 or myVar++;
Decrementing numbers=myVar-1 or myVar--;

var ourDecimal=5.7;
Decimal numbers
var myDecimal=0.009;
Multiplying decimal point numbers
var product=2.0*2.5;
Divide
var quotient=4.4/2.0;
Finding a remainder
var remainer;
remainder=11%3;

var a=3;
var b=17;
var c=12;

a=a+12; or a+=12;
b=9+b; b+=9;
c=c+7; c+=7;

Minus is the same thing a-=12;b-=9;c-=7;

a=a*5 or a*=5;
a=a/5 or a/=5;

var fistName="Ave";
var lastName="Arak";

alert("Hello World!");




Quotes
var myString="I am a \"double quoted\" sring inside \"double quotes\"

Code output
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed

var mySting="FirstLine\n\t\\SecondLine\nThirdLine"

var ourStr="I come first."+"I come second.";

var myStr="This is the start. " + "This is the end."

var ourStr="I come first. ";
ourStr+="I come second. ";

var ourName="freeCodeCamp";
var ourStr="Hello, our name is "+ourName+", how are you?";

var anAdjective="awesome";
var ourStr="freeCodeCamp is ";
ourStr+=anAdjective;

var firstNameLength=0;
var fistName="Ada";
firstNameLength=fistName.length;

var firstLetterofFirstName=0;
var firstName="Ada";
firstLetterofFirstName=firstName[0]; //zero based indexing

var myStr="Jello World";
myStr[0]="H"; //error
myStr="Hello World";

var firstName="Ada";
var lastLetterOfFistName=firstName[firstName.length-1];

function wordBlanks(myNoun,myAdjective,myVerb, myAdverb){
var result="";
result+="The " + myAdjective +" "+ myNoun + " " + myVerb +" to the store" + myAdverb
return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

var ourArray=["John", 23];

var ourArray=[["the universe", 42], ["everything",101010]];

var ourArray=[50,60,70];
var ourData=ourArray[0]; //equals 50

Modify array:
var ourArray=[18,64,99];
ourArray[1]=45; //ourArray now equals [18,45,99]

var myArray=[[1,2,3], [4,5,6], [7,8,9],[[10,11,12], 13, 14]];

var myData=myArray[2][1];
console.log(myData) //8

var ourArray=["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var ourArray=[1,2,3];
var removedFromOurArray=ourArray.pop();//ourArray now equals [1,2]

var ourArray=["Stimpson", "J", ["cat"]];
var removedFromOurArray=ourArray.shift();
//["J", ["cat"]]

var ourArray=["Stimpson", "J", "cat"];
ourArray.shift();//["J", "cat"];
ourArray.unshift("Happy"); //["Happy","J", "cat"];

var myList=[["cerial", 3], "milk", 2], ["bananas", 3], ["juice", 1], ["onions", 5]];

function ourReusableFunction (){
    console.log("Heyya, World");

}
ourReusableFunction();


function ourFunctionWithArgs(a,b){
    console.log(a-b);
}

ourFunctionWithArgs(10,5); //output 5

var myGlobal=10;
function fun1(){
}

function fun2(){
    var output="";
    if(typeof myGlobal !="undefined"{
        output +=myGlobal: " + myGlobal;
    }













