const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [l, s] = input.shift();
  const slide = {};
  input.forEach(([s, e]) => (slide[s - 1] = e - 1));
  const check = Array(100).fill(false);
  const dice = Array(6)
    .fill(0)
    .map((_, idx) => idx + 1);

  const queue = [[0, 0]];
  check[0] = true;
  while (queue.length > 0) {
    const [cur, times] = queue.shift();
    if (cur === 99) {
      console.log(times);
      break;
    }

    for (let move of dice) {
      let next = cur + move;
      if (slide[next]) next = slide[next];

      if (!check[next]) {
        queue.push([next, times + 1]);
        check[next] = true;
      }
    }
  }
  process.exit(0);
});
