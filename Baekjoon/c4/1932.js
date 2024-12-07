const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input.shift();
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  dp[0][0] = input[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + input[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + input[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + input[i][j];
      }
    }
  }
  console.log(Math.max(...dp[n - 1]));
  process.exit(0);
});
