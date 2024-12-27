const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input.shift();
  const move = [
    [1, 0, "v"],
    [0, 1, "h"],
    [1, 1, "dia"],
  ];

  let ans = 0;
  const dfs = (y, x, type) => {
    if (y === n - 1 && x === n - 1) {
      ans += 1;
      return;
    }

    for (let [dy, dx, t] of move) {
      if ((type === "h" && t === "v") || (type === "v" && t === "h")) continue;
      const ny = y + dy;
      const nx = x + dx;

      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        if (t === "dia") {
          if (input[ny][nx] !== 1 && input[y][nx] !== 1 && input[ny][x] !== 1) {
            dfs(ny, nx, "dia");
          }
        } else {
          if (input[ny][nx] !== 1) {
            dfs(ny, nx, t);
          }
        }
      }
    }
  };

  dfs(0, 1, "h");

  console.log(ans);

  process.exit(0);
});
