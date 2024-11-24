const input = [6, 10, 20, 15, 25, 10, 20];
const n = input.shift();
input.unshift(0);

let max = -1;
const dfs = (curFloor, sum, acc, hist) => {
  if (curFloor >= n) {
    if (curFloor === n) max = Math.max(max, sum + input[n]);
    return;
  }

  if (acc === 2) {
    if (curFloor + 2 <= n) {
      dfs(curFloor + 2, sum + input[curFloor], 0, [...hist, curFloor]);
    }
  } else {
    if (curFloor + 2 <= n) {
      dfs(curFloor + 1, sum + input[curFloor], acc + 1, [...hist, curFloor]);
      dfs(curFloor + 2, sum + input[curFloor], 2, [...hist, curFloor]);
    }
  }
};
dfs(0, 0, 0, []);

console.log(max);
