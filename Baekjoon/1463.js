const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = Number(line);
  const dp = Array(input + 1).fill(0);

  dp[1] = 0;

  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
  }
  console.log(dp[input]);
}).on("close", () => {
  process.exit(0);
});
