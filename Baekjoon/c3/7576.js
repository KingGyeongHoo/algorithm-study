const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [maxX, maxY] = input.shift();
  const map = input;

  const check = Array.from({ length: maxY }, () => Array(maxX).fill(false));
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const queue = [];
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (map[y][x] === 1) {
        queue.push([y, x]);
        check[y][x] = true;
      }
    }
  }

  const bfs = () => {
    let idx = 0;
    while (queue.length > idx) {
      const [cy, cx] = queue[idx++];
      for ([dy, dx] of move) {
        const ny = cy + dy;
        const nx = cx + dx;

        if (ny >= 0 && ny < maxY && nx >= 0 && nx < maxX) {
          if (map[ny][nx] === 0 && !check[ny][nx]) {
            map[ny][nx] = map[cy][cx] + 1;
            check[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
    }
  };
  bfs();

  let max = 0;
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (map[y][x] === 0) {
        console.log(-1);
        return;
      } else {
        max = Math.max(max, map[y][x]);
      }
    }
  }

  console.log(max === 0 ? 0 : max - 1);

  process.exit(0);
});
