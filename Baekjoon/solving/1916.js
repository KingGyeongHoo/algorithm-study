const input = [
  [5],
  [8],
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [1, 5],
];
const [n] = input.shift();
const [m] = input.shift();
const [s, e] = input.pop();

const graph = Array.from({ length: n + 1 }, () => []);
const costGraph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const check = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

for (let [s, e, cost] of input) {
  graph[s].push(e);
  graph[e].push(s);
  costGraph[s][e] =
    costGraph[s][e] === 0 ? cost : Math.min(costGraph[s][e], cost);
  costGraph[e][s] =
    costGraph[e][s] === 0 ? cost : Math.min(costGraph[e][s], cost);
}

const queue = [[s, 0]];

let min = Infinity;
while (queue.length > 0) {
  const [cur, cost] = queue.shift();

  if (cur === e) {
    min = Math.min(min, cost);
  }

  for (let next of graph[cur]) {
    if (!check[cur][next]) {
      check[cur][next] = true;
      queue.push([next, cost + costGraph[cur][next]]);
    }
  }
}
console.log(min);
