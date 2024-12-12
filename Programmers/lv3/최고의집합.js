function solution(n, s) {
  if (s < n) return [-1];
  const ans = [];
  for (n; n > 0; n--) {
    const item = Math.floor(s / n);
    ans.push(item);
    s -= item;
  }
  return ans.sort((a, b) => a - b);
}
