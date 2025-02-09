// create a variable of type of string and try to add a number to it

let variableC = "Atanu";

let c = console.log(variableC + 1); // this will throw an error as JavaScript is a dynamically typed language. It tries to concatenate a string and a number.

// use type of operator to find the datatype of the dting in last question

console.log(typeof c);

//create a const object in JS. can you change it to hold a  number later?

// No const cant be changed later

const obj = {
    name: "Atanu",
    age: 21
};






obj.gender = "Male";

console.log(obj);

//write  a JS program to create a word-meaning dictionary of % words.
const prompt = require("prompt-sync")({ sigint: true});
let userInput = prompt("Enter a word: ");

if (userInput == "cat")  {
    console.log("The meaning of the word 'cat' is 'animal'");
} else if (userInput == "dog") {
    console.log("The meaning of the word 'dog' is 'animal'");
} else if (userInput == "mouse"){
    console.log("The meaning of word 'mouse' is 'animal'")
} else if (userInput == "apple"){
    console.log("The meaning of word 'apple' is 'fruit'")
} else if (userInput == "banana"){
    console.log("The meaning of word 'banana' is 'fruit'")
} else {
    console.log("Sorry, I don't know the meaning of this word.");
}
let dictionary = {
    "cat": "animal",
    "dog": "animal",
    "mouse": "animal",
    "apple": "fruit",
    "banana": "fruit",
    "cherry": "fruit"
};

