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
    const queue = [[sy, sx]];
    check[sy][sx] = true;
    let meet = 0;

    while (queue.length > 0) {
      const [cy, cx] = queue.shift();

      for ([dy, dx] of move) {
        const ny = cy + dy;
        const nx = cx + dx;

        if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
          if (map[ny][nx] !== "X" && !check[ny][nx]) {
            queue.push([ny, nx]);
            check[ny][nx] = true;
            if (map[ny][nx] === "P") {
              meet += 1;
            }
          }
        }
      }
    }
    return meet > 0 ? meet : "TT";
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (map[y][x] === "I") console.log(bfs(y, x));
    }
  }

  process.exit(0);
});
