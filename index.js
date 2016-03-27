/* pure function */
// add2 function always produces the same output for the same input
const add2 = (v) => v + 2;

/* impure function */
// addx dependes on an outside value
let x = 3;
const addx = (v) => v + x;

// setx changes the state of an outside varibale
const setx = (v) => x = v;

/* function composition */
const compose = (a,b) => (c) => a(b(c));
const add1 = (v) => v + 1;
const times2 = (v) => v * 2;
const add1OfTimes2 = compose(add1, times2);

console.log(add1OfTimes2(3), 7);

const hello = (n) => `Hello ${n}`;
const mr = (n) => `Mr. ${n}`;
const formalGreeting = (n) => hello(mr(n));

console.log(formalGreeting('Peter'));
