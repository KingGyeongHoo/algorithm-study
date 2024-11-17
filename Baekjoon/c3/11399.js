const input = [[5], [3, 1, 13, 4, 3, 2]];
const [n] = input.shift();
const times = input[0];

times.sort((a, b) => a - b);
const arr = Array(n)
  .fill(0)
  .map((_, idx) => n - idx);

console.log(times.reduce((acc, cur, idx) => acc + cur * arr[idx], 0));
