# Wayfair 2020 - II

## Question

We have a two-dimensional board game involving snakes.  The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move.

Snakes may move in any of four directions - up, down, left, or right - one square at a time, but they will never return to a square that they've already visited.  If a snake enters the board on an edge square, we want to catch it at a different exit square on the board's edge.

The snake is familiar with the board and will take the route to the nearest reachable exit, in terms of the number of squares it has to move through to get there.

board_1's layout looks like this, for example:

    col-->        0  1  2  3  4  5  6  7  8
               +---------------------------
    row      0 |  +  +  +  +  +  +  +  0  0
     |       1 |  +  +  0  0  0  0  0  +  +
     |       2 |  0  0  0  0  0  +  +  0  +
     v       3 |  +  +  0  +  +  +  +  0  0
             4 |  +  +  0  0  0  0  0  0  +
             5 |  +  +  0  +  +  0  +  0  +

Write a function that takes a rectangular board with only +'s and 0's, along with a starting point on the edge of the board, and returns the coordinates of the nearest exit to which it can travel. If there is a tie, return any of the nearest exits.

    let board_1 = [
      ['+', '+', '+', '+', '+', '+', '+', '0', '0'],
      ['+', '+', '0', '0', '0', '0', '0', '+', '+'],
      ['0', '0', '0', '0', '0', '+', '+', '0', '+'],
      ['+', '+', '0', '+', '+', '+', '+', '0', '0'],
      ['+', '+', '0', '0', '0', '0', '0', '0', '+'],
      ['+', '+', '0', '+', '+', '0', '+', '0', '+']
    ];

    let start_1_1 = [2, 0]; // Expected output = (5, 2)
    let start_1_2 = [0, 7]; // Expected output = (0, 8)
    let start_1_3 = [5, 2]; // Expected output = (2, 0) or (5, 5)
    let start_1_4 = [5, 5]; // Expected output = (5, 7)

    let board_2 = [
      ['+', '+', '+', '+', '+', '+'],
      ['0', '0', '0', '+', '0', '+'],
      ['+', '0', '+', '0', '0', '0'],
      ['+', '+', '+', '+', '+', '+']
    ];

    let start_2_1 = [1, 0]; // Expected output = null (or a special value representing no possible exit)
    let start_2_2 = [2, 5]; // Expected output = null

    let board_3 = [
      ['+', '0', '+', '0', '+',],
      ['0', '0', '+', '0', '0',],
      ['+', '0', '+', '0', '+',],
      ['0', '0', '+', '0', '0',],
      ['+', '0', '+', '0', '+']
    ];

    let start_3_1 = [0, 1]; // Expected output = (1, 0)
    let start_3_2 = [4, 1]; // Expected output = (3, 0)
    let start_3_3 = [0, 3]; // Expected output = (1, 4)
    let start_3_4 = [4, 3]; // Expected output = (3, 4)

    let board_4 = [
      ['+', '0', '+', '0', '+',],
      ['0', '0', '0', '0', '0',],
      ['+', '+', '+', '+', '+',],
      ['0', '0', '0', '0', '0',],
      ['+', '0', '+', '0', '+']
    ];

    let start_4_1 = [1, 0]; // Expected output = (0, 1)
    let start_4_2 = [1, 4]; // Expected output = (0, 3)
    let start_4_3 = [3, 0]; // Expected output = (4, 1)
    let start_4_4 = [3, 4]; // Expected output = (4, 3)

    let board_5 = [
      ['+', '0', '0', '0', '+',],
      ['+', '0', '+', '0', '+',],
      ['+', '0', '0', '0', '+',],
      ['+', '0', '+', '0', '+']
    ];

    let start_5_1 = [0, 1] // Expected output = (0, 2)
    let start_5_2 = [3, 1] // Expected output = (0, 1)


## Solution

```js
const closestExit = (board, start) => {
	const map = {
		count: null,
	};
	dfs(board, start[0], start[1], 0, map);
	console.log(map.count);
};

const dfs = (grid, i , j, count, map) => {
	if (i < 0 || j < 0 || j >= grid[0].length || i >= grid.length || grid[i][j] === '+') return;
	grid[i][j] = '+';

	dfs(grid, i-1, j, count + 1, map);
	dfs(grid, i+1, j, count + 1, map);
  dfs(grid, i, j+1, count + 1, map);

	if ((i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) && count) {
		if (!map.count) map.count = count;
		else map.count = Math.min(map.count, count);
	}
};
```
