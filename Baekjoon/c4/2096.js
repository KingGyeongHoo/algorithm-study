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

  const getDp = (type) => {
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < 3; i++) {
      dp[0][i] = input[0][i];
    }

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < 3; j++) {
        if (j === 0)
          dp[i][j] =
            (type === "max"
              ? Math.max(dp[i - 1][0], dp[i - 1][1])
              : Math.min(dp[i - 1][0], dp[i - 1][1])) + input[i][j];
        if (j === 1)
          dp[i][j] =
            (type === "max"
              ? Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])
              : Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])) +
            input[i][j];
        if (j === 2)
          dp[i][j] =
            (type === "max"
              ? Math.max(dp[i - 1][1], dp[i - 1][2])
              : Math.min(dp[i - 1][1], dp[i - 1][2])) + input[i][j];
      }
    }
    return type === "max" ? Math.max(...dp[n - 1]) : Math.min(...dp[n - 1]);
  };
  console.log([getDp("max"), getDp("min")].join(" "));
  process.exit(0);
});
