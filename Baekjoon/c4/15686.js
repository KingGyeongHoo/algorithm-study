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

  const house = [];
  const chicken = [];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (input[y][x] === 1) house.push([y, x]);
      if (input[y][x] === 2) chicken.push([y, x]);
    }
  }

  const isClosed = Array(chicken.length).fill(true);
  let visited = {};

  let min = Infinity;
  const dfs = (idx, close) => {
    if (close > m) return;

    let chickenDist = 0;
    let key = [];
    const chickens = chicken.filter((_, idx) => !isClosed[idx]);
    for (let [y, x] of house) {
      chickenDist += Math.min(
        ...chickens.map(([cy, cx]) => Math.abs(cy - y) + Math.abs(cx - x))
      );
    }
    min = Math.min(min, chickenDist);

    for (let i = idx + 1; i < chicken.length; i++) {
      if (isClosed[i]) {
        isClosed[i] = false;
        dfs(i, close + 1);
        isClosed[i] = true;
      }
    }
  };

  for (let i = 0; i < chicken.length; i++) {
    isClosed[i] = false;
    dfs(i, 1);
    isClosed[i] = true;
  }

  console.log(min);

  process.exit(0);
});
