"use strict";
let age = 14;
let grace= 5;
if (age+grace > 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}




const inputF = require ("prompt-sync");
const prompt = inputF();

let num1 = prompt("Enter the first number : ");
let num2 = prompt("Enter the second number : ");
let opp = prompt("Enter the task: ");

if (opp == "+" ){
    console.log(`${num1}+${num2}`);
}