function solution(routes) {
  routes.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let end = routes.shift()[1];

  let ans = 1;
  for (let [s, e] of routes) {
    if (s > end) {
      ans++;
      end = e;
    }
  }
  return ans;
}
