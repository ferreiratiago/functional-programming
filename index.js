/* Pure Function */
// add2 function always produces the same output for the same input
const add2 = (v) => v + 2;
// console.log(add2(2), 4);

/* Impure Function */
// addx dependes on an outside value
let x = 3;
const addx = (v) => v + x;
// console.log(addx(2), 5);

// setx changes the state of an outside varibale
const setx = (v) => x = v;

/* Function Composition */
const compose = (a,b) => (c) => a(b(c));
const add1 = (v) => v + 1;
const times2 = (v) => v * 2;
const add1OfTimes2 = compose(add1, times2);
//console.log(add1OfTimes2(3), 7);

const hello = (n) => `Hello ${n}`;
const mr = (n) => `Mr. ${n}`;
const formalGreeting = (n) => hello(mr(n));
//console.log(formalGreeting('Peter'));

/* Function Currying */
var R = require('ramda');
const addc = R.curry((a,b) => a + b);
const add5to = addc(5);
console.log(add5to(2), 7);

const users = [{name: 'chet', age:25}, {name:'joe', age:24}]
console.log(R.pipe(
    R.sortBy(R.prop('age')),
    R.map(R.prop('name')),
    R.join(', ')
)(users));
