const input = [
  [5, 6],
  [1],
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 6],
];

const [n, m] = input.shift();
const start = input.shift();
const routes = input;

const costs = {};
const graph = {};
for (let [s, e, c] of routes) {
  if (!graph[s]) graph[s] = [];
  graph[s].push(e);

  if (!costs[s]) costs[s] = Array(n + 1).fill(Infinity);
  costs[s][e] = Math.min(costs[s][e], c);
}

const check = Array(n + 1).fill(false);
const cost = Array(n + 1).fill(Infinity);

const queue = [start];
check[start] = true;
cost[start] = 0;

while (queue.length > 0) {
  const cur = queue.shift();

  if (!graph[cur]) continue;

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
const ans = [];
for (let i = 1; i <= n; i++) {
  ans.push(cost[i] === Infinity ? "INF" : cost[i]);
}
console.log(ans.join("\n"));
