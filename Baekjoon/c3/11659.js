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
  const numbers = input.shift();

  const sumArr = Array(n + 1).fill(0);
  sumArr[0] = 0;
  sumArr[1] = numbers[0];
  for (let i = 2; i <= n; i++) {
    sumArr[i] = sumArr[i - 1] + numbers[i - 1];
  }
  const ans = [];
  for ([s, e] of input) {
    ans.push(sumArr[e] - sumArr[s - 1]);
  }
  console.log(ans.join("\n"));

  process.exit(0);
});
