function solution(X, Y) {
  const map = {};
  for (let str of X) {
    if (!map[str]) map[str] = 0;
    map[str] += 1;
  }

  const arr = [];
  for (let str of Y) {
    if (map[str]) {
      map[str] -= 1;
      arr.push(str);
    }
    if (map[str] === 0) delete map[str];
  }
  arr.sort((a, b) => b - a);
  if (arr.length === 0) return "-1";
  if (arr[0] === "0") return "0";
  return arr.join("");
}
