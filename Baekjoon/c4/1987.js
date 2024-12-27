const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [r, c] = input.shift().split(" ").map(Number);
  const check = Array.from({ length: r }, () => Array(c).fill(false));
  check[0][0] = true;

  const alphabets = {};
  for (let i = 65; i <= 91; i++) {
    alphabets[String.fromCharCode(i)] = false;
  }
  alphabets[input[0][0]] = true;

  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let max = 0;
  const dfs = (cy, cx, moving) => {
    max = Math.max(max, moving);
    for (let [dy, dx] of move) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (ny >= 0 && ny < r && nx >= 0 && nx < c) {
        if (!check[ny][nx] && !alphabets[input[ny][nx]]) {
          check[ny][nx] = true;
          alphabets[input[ny][nx]] = true;
          dfs(ny, nx, moving + 1);
          check[ny][nx] = false;
          alphabets[input[ny][nx]] = false;
        }
      }
    }
  };

  dfs(0, 0, 1);

  console.log(max);
  process.exit(0);
});
