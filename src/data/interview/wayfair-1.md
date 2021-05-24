# Wayfair 2020 - I

Given a 2D array, return all rows and columns which have all '0' in them.


## Solution

```js
const findPaths = board => {
  let rowResults = [];
  let columnResults = [];

  for (let i = 0; i < board.length; i++) {
    if (checkRow(board[i])) rowResults.push(i);
  }

  for (let i = 0; i < board[0].length; i++) {
    if (checkCol(board, i)) columnResults.push(i);
  }

  return {
    rowResults,
    columnResults
  };
};

const checkRow = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') return false;
  }
  return true;
};

const checkCol = (arr, col) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][col] !== '0') return false;
  }
  return true;
};

// console.log(findPaths(straight_board_4));
```
