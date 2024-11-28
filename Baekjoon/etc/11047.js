const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, cost] = input.shift().split(" ").map(Number);
  const coin = [...input].map(Number);
  let sum = 0;
  while (cost !== 0) {
    const max = coin.pop();
    if (max > cost) {
      continue;
    }
    sum += Math.floor(cost / max);
    cost %= max;
  }
  console.log(sum);
  process.exit(0);
});
