const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(""));
  const check = Array.from({ length: n }, () => Array(m).fill(false));
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const bfs = (sy, sx) => {
    const queue = [[sy, sx, 0]];
    check[sy][sx] = true;

    let min = Infinity;
    while (queue.length > 0) {
      const [cy, cx, sum] = queue.shift();
      if (cy === n - 1 && cx === m - 1) {
        min = Math.min(min, sum);
        break;
      }

      for ([dy, dx] of move) {
        const ny = cy + dy;
        const nx = cx + dx;
        if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
          if (!check[ny][nx] && map[ny][nx] === "1") {
            check[ny][nx] = true;
            queue.push([ny, nx, sum + 1]);
          }
        }
      }
    }
    return min + 1;
  };
  console.log(bfs(0, 0));

  process.exit(0);
});
