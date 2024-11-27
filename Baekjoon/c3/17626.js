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
  dp[1] = 1;

  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  console.log(dp[dp.length - 1]);
  process.exit(0);
});
