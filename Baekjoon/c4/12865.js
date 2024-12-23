const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, k] = input[0];
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const [w, v] = input[i];
    for (let j = 1; j <= k; j++) {
      if (j >= w) dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
      else dp[i][j] = dp[i - 1][j];
    }
  }

  console.log(dp[n][k]);
  process.exit(0);
});
