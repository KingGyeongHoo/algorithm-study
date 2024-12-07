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

  const graph = {};
  input.forEach(([s, e]) => {
    if (!graph[s]) graph[s] = [];
    if (!graph[e]) graph[e] = [];

    graph[s].push(e);
    graph[e].push(s);
  });

  const check = Array(n + 1).fill(false);
  const queue = [1];

  const parents = {};
  while (queue.length > 0) {
    const cur = queue.shift();
    check[cur] = true;

    for (next of graph[cur]) {
      if (!check[next]) {
        queue.push(next);
        parents[next] = cur;
        check[next] = true;
      }
    }
  }

  console.log(Object.values(parents).join("\n"));
  process.exit(0);
});
