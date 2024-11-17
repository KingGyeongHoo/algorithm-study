const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("")
  .map(Number);
const n = input.shift();

const dp = Array.from({ length: 42 }, () => Array(2).fill(0));

dp[0][0] = 1;
dp[0][1] = 0;
dp[1][0] = 0;
dp[1][1] = 1;

for (let i = 2; i < 42; i++) {
  dp[i][0] = dp[i - 2][0] + dp[i - 1][0];
  dp[i][1] = dp[i - 2][1] + dp[i - 1][1];
}

for (let num of input) {
  console.log(dp[num][0], dp[num][1]);
}
