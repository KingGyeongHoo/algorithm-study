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
  const [m] = input.shift();
  const routes = input.slice(0, m);
  const [start, end] = input.pop();

  const costs = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let [s, e, c] of routes) {
    graph[s].push(e);

    costs[s][e] = Math.min(costs[s][e], c);
  }

  const check = Array(n + 1).fill(false);
  const cost = Array(n + 1).fill(Infinity);

  const queue = [start];
  check[start] = true;
  cost[start] = 0;

  while (queue.length > 0) {
    const cur = queue.shift();

    if (cur === end) {
      continue;
    }

    for (let next of graph[cur]) {
      const nCost = cost[cur] + costs[cur][next];
      if (!check[next]) {
        check[next] = true;
        cost[next] = nCost;
        queue.push(next);
      } else {
        if (nCost < cost[next]) {
          cost[next] = nCost;
          queue.push(next);
        }
      }
    }
  }

  console.log(cost[end]);
  process.exit(0);
});
