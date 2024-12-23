function solution(n, roads, sources, destination) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [s, e] of roads) {
    graph[s].push(e);
    graph[e].push(s);
  }

  const cost = Array(n + 1).fill(0);
  const bfs = (start) => {
    const check = Array(n + 1).fill(false);
    const queue = [start];
    check[start] = true;

    while (queue.length > 0) {
      const cur = queue.shift();

      for (let next of graph[cur]) {
        if (!check[next]) {
          check[next] = true;
          cost[next] = cost[cur] + 1;
          queue.push(next);
        }
      }
    }
  };
  bfs(destination);

  const ans = [];
  for (s of sources) {
    if (s === destination) {
      ans.push(0);
      continue;
    }

    if (cost[s] === 0) {
      ans.push(-1);
    } else {
      ans.push(cost[s]);
    }
  }
  return ans;
}
