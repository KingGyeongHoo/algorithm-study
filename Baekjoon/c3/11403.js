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
  const graph = Array.from({ length: n }, () => []);

  for (let s = 0; s < n; s++) {
    for (let e = 0; e < n; e++) {
      if (input[s][e] === 1) {
        graph[s].push(e);
      }
    }
  }

  const ans = [];
  const bfs = (start) => {
    const check = Array(n).fill(0);
    const queue = [start];

    while (queue.length > 0) {
      const cur = queue.shift();

      for (let next of graph[cur]) {
        if (!check[next]) {
          check[next] = 1;
          queue.push(next);
        }
      }
    }
    ans.push(check.join(" "));
  };

  for (let i = 0; i < n; i++) {
    bfs(i);
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
