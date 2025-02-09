// tutorial on Loops in JavaScript

/*it helps the developers to do repetative tasks in a east way */

// for loop

for (let i=1; i<=10; i++) {
    console.log(i);
}

// While  loop (old)

let i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

//for in loop ( to get key  and emention from)

let obj = {
    name: "Atanu",
    Age: "20",
    Companny: "NOVO"
}

for (let key in obj) {
    console.log(key + " : " + obj[key]);
}

//for of loops  ( for iteration purposes )

for (const c of "Atanu") {
    console.log(c);
}

//do-while loops (if youw want that the loop runs for atleast 1 time)

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);