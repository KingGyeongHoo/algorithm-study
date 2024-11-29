const input = [
  [20],
  [5, 1, 3, 1, 5, 1, 3, 1, 5, 1, 3, 1, 5, 1, 3, 1, 5, 1, 3, 1],
];

const [n] = input[0];
const fruits = input[1];
let max = 0;
const dfs = (start, end) => {
  const arr = fruits.slice(start, end);
  const kinds = [...new Set(arr)].length;
  if (kinds <= 2) {
    if (kinds === 2) max = Math.max(max, arr.length);
    return;
  }

  dfs(start + 1, end);
  dfs(start, end - 1);
};

dfs(0, n);

console.log(max);
