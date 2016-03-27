/* pure function */
// add2 function always produces the same output for the same input
const add2 = (value) => value + 2;

console.log(add2(4), 6);

/* impure function */
// addx dependes on an outside value
let x = 3;
const addx = (value) => value + x;

console.log(addx(2), 5);

// setx changes the state of an outside varibale
const setx = (value) => x = value;

setx(7);
console.log(x, 7);
