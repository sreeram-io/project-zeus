# Arguments

```js
function add() {
  console.log(arguments); // [1, 2, 3, callee]
}

const add = () => {
  console.log(arguments); // Uncaught reference error
};

function add(...args) {
  return args.reduce((acc, num) => acc+= num); // 6
}

function add() {
  return [].slice.call(arguments).reduce((acc, num) => acc+= num); // 6
}

function add() {
  return [...arguments].reduce((acc, num) => acc+= num); // 6
}

add(1,2,3);

```

## References

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
