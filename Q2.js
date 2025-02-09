// Use logical operators to find whether the age  of a person lies between 10 and 20


const prompt = require("prompt-sync")({ sigint: true});
let age = prompt("Enter age : ");

if (age <=10) {
    console.log("Age is below 10");
} else if (age >10 , age <=20) {
    console.log("Age is between 10 and 20")
} else {
    console.log("Age is above 20")
}


// demonstrate the use of switch case statement in javascript

let grade = prompt("Enter the grade: ");

switch(grade) {
    case 'A':
        console.log("Excelent")
        break;
    case 'B':
        console.log("Good")
        break;
    case 'C':
        console.log("Can Be better")
        break;
    case 'D':
        console.log ("Fair")
        break;
    case 'E':
        console.log ("Poor")
        break;
}


// write a JS program to find wheter the number  id  divisible by 2 and 3

let numberToBeNoted =  prompt("Enter the number: ");

if (numberToBeNoted % 2 == 0 && numberToBeNoted % 3 == 0) {
    console.log(`${numberToBeNoted} is divisible by both 2 and 3`)
} else if (numberToBeNoted % 3 ==0) {
    console.log(`${numberToBeNoted} is divisible by 3`)
} else if (numberToBeNoted % 2 == 0) {
    console.log(`${numberToBeNoted} is divisible by 2`)
} else {
    console.log(`${numberToBeNoted} is not divisible by 2 or 3`)
}





// print "you can drive" or "You cant drive" based on  age being  greaterthan 18 using ternary operator


let age1 = prompt("Enter your age: ");

let canDrive = (age1 >= 18) ?  "can Drive a car" :  "can't  drive a car"
console.log(`${canDrive}`);