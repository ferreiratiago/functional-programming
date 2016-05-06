# Functional Programming Concepts

This repository is based on the medium post [Functional Programming for JavaScript People](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504#.d23jcnrzu) by [@chetcorcos](https://medium.com/@chetcorcos). I strongly recommend to read it.

#### Set Up
I have used [ES6](http://es6-features.org/#Constants) to implement the functions and [babel](https://babeljs.io/) to transforms them to ES5.

To have it running on your side just run `$ npm install` and then use it together with [node](https://nodejs.org/en/):
```bash
$ babel index.js | node
```

## Pure Functions

**Pure functions are those who only depend on its input and always produce the same output for the same input.** Read more about [pure functions]((https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976).
) by [@_ericelliott](https://twitter.com/_ericelliott).

**We call impure functions those who depend on an outside state**. This relation may cause the output to change for the same input making impure functions unpredictable. This reason makes it hard to analyze and optimize impure functions at compile time.

When writing pure functions developers only need to concern about the functions' body. All the outside state is irrelevant.

## Function Composition

**Function composition is it called when we pick two pure functions into one.** Because pure functions do not depended on the outside state its composition function perfectly beautiful. The end result will be the value after being handle by the two functions.

We can see composition as the use of the proposition `"of"`. On the composition of the two functions `add1` and `times2`, translated into `add1(times2(v))`, we say `adding 1 of the times 2 of v`.

The trick about composition is that executes its functions in the opposite order. The composition of `add1(times2(v))` will execute first `times2` and then `add1`.

**Composition is a great alternative to oriented inheritance.** See [Mattias Petter Johansson](https://twitter.com/mpjme) [talk](https://www.youtube.com/watch?v=wfMtDGfHWpA) about it.

On composition you should definitely explore [Ramda](http://fr.umio.us/why-ramda/).

## Function Currying

**Currying is when we call a function with fewer arguments than what it needs and a new function (able to accept the remaining arguments) is returned.**

In the example bellow we created a curry function called `addc` and then use it to create the function `add5to`.

```js
var R = require('ramda');
const addc = R.curry((a,b) => a + b);
const add5to = addc(5);
```

In fact `add5to` translates to `(b) => 5 + b`. This is because by running `addc(5)`, and because it is a curry function, it returns a new curry function with the reaming arguments to be handled.

To know more about currying go to [github project](https://github.com/dominictarr/curry). Also read this [good article](https://hughfdjackson.com/javascript/why-curry-helps/).

## Functors

Functors are objects that implement the `map` method. The most used example for functor is the object `Array`, i.e. `[]`.
