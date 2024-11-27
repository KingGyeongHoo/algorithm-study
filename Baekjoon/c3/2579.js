const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const n = input.shift();
  input.unshift(0);

  const dp = Array(n + 1).fill(0);

  dp[1] = input[1];
  dp[2] = Math.max(input[1] + input[2], input[2]);
  dp[3] = Math.max(input[1] + input[3], input[2] + input[3]);

  for (let i = 4; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }
  console.log(dp[n]);
  process.exit(0);
});
