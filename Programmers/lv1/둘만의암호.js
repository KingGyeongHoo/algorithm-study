function solution(s, skip, index) {
  let ans = "";
  const check = {};
  skip.split("").forEach((s) => (check[s.charCodeAt()] = true));
  for (let str of s) {
    let idx = str.charCodeAt();
    let i = 0;
    while (i < index) {
      idx++;
      if (idx > 122) {
        idx = idx - 122 + 96;
      }
      if (check[idx]) {
        continue;
      }
      i++;
    }
    ans += String.fromCharCode(idx);
  }
  return ans;
}
