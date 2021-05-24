# Bind

```js
function Add() {
  return this.val1 + this.val2;
};

const boundAdd = Add.bind({ val1: 10, val2: 20 });
console.log(boundAdd()); // 30
```

&nbsp;

## Implementation

```js
const obj1 = {
  num1: 1,
  num2: 2,
  add: function() {
    return this.num1 + this.num2;
  }
};

const obj2 = {
  num1: 100,
  num2: 200,
};

Function.prototype.fbind = function(ctx) {
  const that = this;
  return function() {
    return that.call(ctx);
  }
};

console.log(obj1.add.fbind(obj2)()); // 300
```
