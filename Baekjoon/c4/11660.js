const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m] = input.shift();

  const map = input.slice(0, n);
  const target = input.slice(n);

  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  dp[1][1] = map[0][0];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + map[i - 1][j - 1];
    }
  }

  const ans = [];
  for ([sy, sx, ty, tx] of target) {
    const sum =
      dp[ty][tx] - dp[sy - 1][tx] - dp[ty][sx - 1] + dp[sy - 1][sx - 1];
    ans.push(sum);
  }
  console.log(ans.join("\n"));

  process.exit(0);
});
