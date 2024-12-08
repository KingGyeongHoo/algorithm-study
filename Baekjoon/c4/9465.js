const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [len] = input.shift();

  const getDp = (input) => {
    const [n] = input.shift();
    const dp = Array.from({ length: 2 }, () => Array(n).fill(0));
    dp[0][0] = input[0][0];
    dp[0][1] = input[1][0] + input[0][1];
    dp[1][0] = input[1][0];
    dp[1][1] = input[0][0] + input[1][1];

    for (let i = 2; i < n; i++) {
      for (let j = 0; j < 2; j++) {
        if (j === 0) {
          dp[j][i] =
            Math.max(dp[j][i - 2], dp[j + 1][i - 1], dp[j + 1][i - 2]) +
            input[j][i];
        } else {
          dp[j][i] =
            Math.max(dp[j - 1][i - 1], dp[j][i - 2], dp[j - 1][i - 2]) +
            input[j][i];
        }
      }
    }

    return Math.max(dp[0][n - 1], dp[1][n - 1]);
  };

  const ans = [];
  for (let i = 0; i < input.length; i += 3) {
    const arr = input.slice(i, i + 3);
    ans.push(getDp(arr));
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
