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
  //n이 1일 때 미쳤나 ㅋㅋ
  if (n === 1) {
    console.log(0);
    return;
  }
  const graph = {};
  for (let [s, e, c] of input) {
    if (!graph[s]) graph[s] = [];
    if (!graph[e]) graph[e] = [];
    graph[s].push([e, c]);
    graph[e].push([s, c]);
  }

  let check = Array(n + 1).fill(false);
  check[1] = true;
  let max = [0, 0];
  const dfs = (cur, dist) => {
    if (max[1] < dist) {
      max = [cur, dist];
    }

    const children = graph[cur];
    for (let [next, nextDist] of children) {
      if (!check[next]) {
        check[next] = true;
        dfs(next, dist + nextDist);
      }
    }
  };
  dfs(1, 0);

  check = Array(n + 1).fill(false);
  check[max[0]] = true;
  dfs(max[0], 0);
  console.log(max[1]);
  process.exit(0);
});
