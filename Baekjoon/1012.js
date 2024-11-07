const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const n = input.shift();
  const test = [];
  while (input.length > 0) {
    const [w, h, n] = input.shift();
    const cab = input.splice(0, n);
    const map = Array.from({ length: h }, () => Array(w).fill(0));
    for (let [x, y] of cab) {
      map[y][x] = 1;
    }
    test.push([w, h, map]);
  }

  for (let item of test) {
    let ans = 0;
    const [w, h, map] = item;
    const check = Array.from({ length: map.length }, () =>
      Array(map[0].length).fill(false)
    );
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const bfs = (x, y) => {
      const queue = [[x, y]];
      check[y][x] = true;

      while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        for (let i in dx) {
          const nx = cx + dx[i];
          const ny = cy + dy[i];
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            if (!check[ny][nx] && map[ny][nx] === 1) {
              check[ny][nx] = true;
              queue.push([nx, ny]);
            }
          }
        }
      }
      return 1;
    };
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (map[y][x] === 1 && !check[y][x]) {
          ans += bfs(x, y);
        }
      }
    }
    console.log(ans);
  }
  process.exit(0);
});
