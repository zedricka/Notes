// This is a comment

/* this is a block comment 

Anything between here is a comment!

*/

// this is a string
var myName = "Zedrick";

// this is a integer
// CTRL + /
var myAge = 16;

// boolean type (True and False)
var booleanExample = true;

//  unassigned variable
undefined

// not a number
NaN

// array
var myArray = ['one', 2, 'seven', 'batman', true]

// objects

//function is an executed statement
function (){

}

function nameOfFunction (){
  console.log('hello i am a new function')
}

//invoking a function
nameOfFunction();

function hello (){
  console.log('wattup');
}

hello();

//parameters
function hello (parameter 1, parameter 2, parameter 3, ...) {
    console.log(a + b);

}

hello (10,11);

//console says 21


function bai (c, d){
  console.log(c - d);
}

bai (20, 10);

//console says 10

var subtract = bai(30, 12);

console.log(subtract);

//console says undefined


// return can only be used once, any console logs after it won't work!
function bai (c, d){
  console.log(c - d);
  return c + d;
}

function createGreeting (name, age){
  if (age < 32) {
    console.log('hello' + name);
    return 'hello' + name
  }else{
    console.log('hello Mr. ' + name);
    return 'hello Mr. ' + name;
    return 'hello MRS. ' + name; // You cannot add another return after a return! gives you an error
  }
  }
}

createGreeting ('Tan', 50); 
//console says hello Mr.Tan

var degreeOutside = 70;
var numberOfClouds = 50;

function isItRaining(degreeOutside, numberOfClouds){
  if (degreeOutside > 70 && numberOfClouds > 50){
    return console.log ('It"s raining outside!');
  }
}

isItRaining(50, 20)

//loop
for (statement 1; statement 2; statement 3) {
    code block to be executed
}