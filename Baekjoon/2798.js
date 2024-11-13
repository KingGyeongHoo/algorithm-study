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
  const cards = input[0];
  let max = -1;
  const dfs = (sum, obj, num) => {
    if (num === 3) {
      if (sum <= m) {
        max = Math.max(sum, max);
      }
      return;
    }

    for (let card of cards) {
      if (!obj[card]) {
        obj[card] = true;
        dfs(sum + card, obj, num + 1);
        obj[card] = false;
      }
    }
  };

  dfs(0, {}, 0);

  console.log(max);

  process.exit(0);
});
