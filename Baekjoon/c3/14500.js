const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m] = input.shift();
  const lShape = [
    [
      [0, 0],
      [0, 1],
      [-1, 0],
      [-2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [-1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [-1, 1],
      [-2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  ];

  const tShape = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [-1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [2, 0],
    ],
  ];
  const sShape = [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [-1, 1],
      [-1, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [2, -1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
  ];

  const iShape = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  ];

  const square = [
    [
      [0, 0],
      [0, 1],
      [-1, 0],
      [-1, 1],
    ],
  ];
  const tetromino = [lShape, sShape, tShape, iShape, square];

  let maxVal = 0;
  const getMaxSum = (sy, sx) => {
    let max = 0;

    for (let type of tetromino) {
      for (moves of type) {
        let sum = 0;
        for ([dy, dx] of moves) {
          const ny = sy + dy;
          const nx = sx + dx;

          if (ny < 0 || ny >= n || nx < 0 || nx >= m) break;
          sum += input[ny][nx];
        }
        max = Math.max(sum, max);
      }
    }
    return max;
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      maxVal = Math.max(maxVal, getMaxSum(y, x));
    }
  }
  console.log(maxVal);
  process.exit(0);
});
