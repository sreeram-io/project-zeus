## The best javascript interview question I have ever faced

#### 16 Oct 2021, London

&nbsp;

This was asked to me in an interview for a company in London the name of which I cant reveal for the role of a Senior Frontend Engineer.

## Question

You are given a function to be completed.

```js
var myFunction = function () {
  // your solution goes here
};
```

&nbsp;

You are also given 4 tests to be satisfied. You cannot modify this. Your goal is to complete the myFunction function so as to satisfy the tests without changing any of the tests.

```js
let myFunc = new myFunction();
let myFunc2 = myFunction();

console.log(myFunc == myFunc2); // true
console.log(`val: ${myFunc}`); // val: 1
console.log(`val: ${myFunc}`); // val: 2
console.log(`val: ${myFunc}`); // val: 3
```

&nbsp;

## Solution

### The Clues

(a) The value of myFunc will surely be an object.

(b) The value of myFunc2 could be a primitive value or an object.

(c) In the first test, myFunc and myFunc2 are tested for equality using a '=='.

(d) The value of myFunc seems to increment every time its called.

(e) myFunc is called using template literals.


I solved this using Deductive reasoning. Because of (a) and (b), we know that myFunc2 cannot be an object because 2 objects are not equal. Hence myFunc2 has to be a primitive value. With (c) in mind, when using the type coercing equality (==), Javascript tries to coerce the value of one of the values to a primitive type. In this case it converts the object to a string by calling the inbuilt toString method which returns '[object Object]'. So we could solve the first test by writing this:

```js
var myFunction = function () {
  this.val = "[object Object]";
  return this.val;
};
```

&nbsp;

But this wont solve the other tests. As per (d) we have to find a way to increment the value of myFunc2 per test. So it could be a number. From (e), the fact that myFunc is wrapped in template literals leads us to the fact that its also coerced to a string. So what if we changed the value of `this.val` to a number and overrode the inbuilt toString method to our own method where we increment it every time its called?

```js
var Increment = function () {
  this.val = 0;

  this.toString = function () {
    this.val++;
    return this.val;
  };

  return this.val;
};
```

&nbsp;

Almost. But not exactly right because the values printed are 1, 2 and 3 and not 0, 1 and 2 required by the test. This can be solved using the postfix operator where the value is returned and then incremented subsequently. And so we have the working solution like below:

```js
var Increment = function () {
  this.val = 0;

  this.toString = function () {
    return this.val++;
  };

  return this.val;
};
```

&nbsp;

Thats some of the most important concepts of Javascript topics packaged into a single elegant test. It tests for your knowlege of Constructor functions, type coercion and operator precedence with a few lines of code. It also tests for your reasoning skills. Hence its safe to say that this is by far the best question I have ever faced.
