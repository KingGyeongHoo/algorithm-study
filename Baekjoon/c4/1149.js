const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input[0];

  const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

  for (let i = 0; i < 3; i++) {
    dp[1][i] = input[1][i];
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j === k) continue;
        dp[i][j] =
          dp[i][j] === 0
            ? dp[i - 1][k] + input[i][j]
            : Math.min(dp[i - 1][k] + input[i][j], dp[i][j]);
      }
    }
  }

  console.log(Math.min(...dp[n]));
  process.exit(0);
});
