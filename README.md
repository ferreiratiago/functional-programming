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
