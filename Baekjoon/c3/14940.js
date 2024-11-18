const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [maxY, maxX] = input.shift();
  const map = input;

  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const newMap = Array.from({ length: maxY }, () => Array(maxX).fill(-1));
  const check = Array.from({ length: maxY }, () => Array(maxX).fill(false));

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (map[y][x] === 0) {
        newMap[y][x] = 0;
      }
    }
  }

  const bfs = (sy, sx) => {
    const queue = [[sy, sx, 0]];
    newMap[sy][sx] = 0;
    check[sy][sx] = true;

    while (queue.length > 0) {
      const [cy, cx, dist] = queue.shift();

      for (let [dy, dx] of move) {
        const ny = cy + dy;
        const nx = cx + dx;

        if (ny >= 0 && ny < maxY && nx >= 0 && nx < maxX) {
          if (map[ny][nx] === 1 && !check[ny][nx]) {
            check[ny][nx] = true;
            newMap[ny][nx] = dist + 1;
            queue.push([ny, nx, dist + 1]);
          }
        }
      }
    }
  };

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (map[y][x] === 2) {
        bfs(y, x);
      }
    }
  }

  console.log(newMap.map((el) => el.join(" ")).join("\n"));
  process.exit(0);
});
