const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = [];

rl.on("line", (line) => {
  map.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m, b] = map.shift();

  let max = [Infinity, -1];
  for (let h = 0; h <= 256; h++) {
    let blocks = b;
    let totalTime = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] < h) {
          blocks -= h - map[i][j];
          totalTime += h - map[i][j];
        } else if (map[i][j] > h) {
          blocks += map[i][j] - h;
          totalTime += (map[i][j] - h) * 2;
        }
      }
    }
    if (blocks >= 0) {
      const [maxT, maxH] = max;
      if (totalTime <= maxT) {
        max = [totalTime, h];
      }
    }
  }
  console.log(max.join(" "));
  process.exit(0);
});
