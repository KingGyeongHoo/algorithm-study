const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input.shift());
  const rgbMap = input.map((el) => el.split(""));
  const rgbCheck = Array.from({ length: n }, () => Array(n).fill(false));

  const rbMap = rgbMap.map((el) => el.map((e) => (e === "G" ? "R" : e)));
  const rbCheck = Array.from({ length: n }, () => Array(n).fill(false));

  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const bfs = (sy, sx, color, check, map) => {
    const queue = [[sy, sx]];
    check[sy][sx] = true;

    while (queue.length > 0) {
      const [cy, cx] = queue.shift();

      for (let [dy, dx] of move) {
        const ny = cy + dy;
        const nx = cx + dx;

        if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
          if (!check[ny][nx] && map[ny][nx] === color) {
            queue.push([ny, nx]);
            check[ny][nx] = true;
          }
        }
      }
    }
  };

  let [rgb, rb] = [0, 0];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!rgbCheck[y][x]) {
        bfs(y, x, rgbMap[y][x], rgbCheck, rgbMap);
        rgb++;
      }
      if (!rbCheck[y][x]) {
        bfs(y, x, rbMap[y][x], rbCheck, rbMap);
        rb++;
      }
    }
  }
  console.log(rgb, rb);
  process.exit(0);
});
