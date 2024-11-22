const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  const dp = Array(input + 1).fill(0);
  dp[3] = 1;
  dp[5] = 1;
  for (let i = 6; i <= input; i++) {
    if (dp[i - 3] !== 0 && dp[i - 5] !== 0) {
      dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
    } else if (dp[i - 3] !== 0) {
      dp[i] = dp[i - 3] + 1;
    } else if (dp[i - 5] !== 0) {
      dp[i] = dp[i - 5] + 1;
    }
  }
  console.log(dp[input] === 0 ? -1 : dp[input]);

  process.exit(0);
});
