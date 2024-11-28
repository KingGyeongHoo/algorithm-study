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

  const graph = Array.from({ length: n + 1 }, () => []);
  input.forEach((el) => {
    const [s, e] = el;
    graph[s].push(e);
    graph[e].push(s);
  });
  const bfs = (start) => {
    const queue = [[start, 0]];
    const check = Array(n + 1).fill(false);
    check[start] = true;

    const obj = {};
    while (queue.length > 0) {
      const [cur, f] = queue.shift();
      for (let next of graph[cur]) {
        if (!check[next]) {
          check[next] = true;
          queue.push([next, f + 1]);
          obj[next] = f + 1;
        }
      }
    }
    const sum = Object.values(obj).reduce((acc, cur) => acc + cur, 0);
    return [start, sum];
  };

  const ans = [];
  for (let i = 1; i <= n; i++) {
    ans.push(bfs(i));
  }
  ans.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  console.log(ans[0][0]);
  process.exit(0);
});
