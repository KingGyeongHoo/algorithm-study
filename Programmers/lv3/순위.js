function solution(n, results) {
  const win = {};
  const lose = {};

  for (let [w, l] of results) {
    if (!win[w]) win[w] = [];
    if (!lose[l]) lose[l] = [];
    win[w].push(l);
    lose[l].push(w);
  }

  const bfs = (start) => {
    const check = Array(n + 1).fill(false);
    check[0] = true;
    check[start] = true;

    let queue = [start];

    while (queue.length > 0) {
      const cur = queue.shift();
      if (!win[cur]) continue;

      for (next of win[cur]) {
        if (!check[next]) {
          queue.push(next);
          check[next] = true;
        }
      }
    }

    queue = [start];
    while (queue.length > 0) {
      const cur = queue.shift();
      if (!lose[cur]) continue;

      for (next of lose[cur]) {
        if (!check[next]) {
          queue.push(next);
          check[next] = true;
        }
      }
    }
    if (check.every((el) => el === true)) {
      return 1;
    }
    return 0;
  };
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += bfs(i);
  }

  return ans;
}
