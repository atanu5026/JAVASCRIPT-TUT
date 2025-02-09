//functions in  Javascript


const prompt = require("prompt-sync")({ sigint: true});
nameinput1 = prompt("Enter the name: ");
function nice(name) {
    console.log("Hello " + name + " you are good");
}


nice(nameinput1);

// arrow function in Javascript ( reusable function )

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(45);
func1(35);
func1(65);
