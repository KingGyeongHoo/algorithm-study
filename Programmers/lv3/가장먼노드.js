function solution(n, edge) {
  const graph = {};
  for (let [s, e] of edge) {
    if (!graph[s]) graph[s] = [];
    if (!graph[e]) graph[e] = [];

    graph[s].push(e);
    graph[e].push(s);
  }

  const check = Array(n + 1).fill(false);
  const queue = [[1, 1]];
  check[1] = true;

  let max = 0;
  let ans = [];
  while (queue.length > 0) {
    const [cur, dist] = queue.shift();

    if (graph[cur].every((el) => check[el] === true)) {
      max = Math.max(dist, max);
      ans.push([cur, dist]);
      continue;
    }

    for (let next of graph[cur]) {
      if (!check[next]) {
        check[next] = true;
        queue.push([next, dist + 1]);
      }
    }
  }
  return ans.filter((el) => el[1] === max).length;
}
