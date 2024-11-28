const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = Number(line);
  const dp = Array(input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }

  console.log(dp[input]);
}).on("close", () => {
  process.exit(0);
});
