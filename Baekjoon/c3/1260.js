const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m, v] = input.shift();
  const graph = Array.from({ length: n + 1 }, () => []);
  input.forEach((el) => {
    const [s, e] = el;
    graph[s].push(e);
    graph[e].push(s);
  });
  graph.forEach((el) => el.sort((a, b) => a - b));

  const dfsCheck = Array(n + 1).fill(false);
  const dfsAns = [];
  const dfs = (curNode) => {
    if (dfsCheck[curNode]) return;
    dfsCheck[curNode] = true;
    dfsAns.push(curNode);
    for (let next of graph[curNode]) {
      if (!dfsCheck[next]) {
        dfs(next);
      }
    }
  };

  const bfsCheck = Array(n + 1).fill(false);
  const bfsAns = [];
  const bfs = () => {
    const queue = [v];

    while (queue.length > 0) {
      const curNode = queue.shift();
      if (bfsCheck[curNode]) continue;
      bfsCheck[curNode] = true;
      bfsAns.push(curNode);

      for (let next of graph[curNode]) {
        if (!bfsCheck[next]) {
          queue.push(next);
        }
      }
    }
  };
  dfs(v);
  bfs(v);
  console.log(dfsAns.join(" "));
  console.log(bfsAns.join(" "));

  process.exit(0);
});
