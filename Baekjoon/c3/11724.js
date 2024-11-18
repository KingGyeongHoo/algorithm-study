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
  for (let [s, e] of input) {
    graph[s].push(e);
    graph[e].push(s);
  }
  const visited = Array(n + 1).fill(false);

  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const cur = queue.shift();

      for (let next of graph[cur]) {
        if (!visited[next]) {
          queue.push(next);
          visited[next] = true;
        }
      }
    }
  };

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      bfs(i);
      ans++;
    }
  }
  console.log(ans);

  process.exit(0);
});
