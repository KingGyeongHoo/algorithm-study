const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [s, e] = input;
  const check = Array(100001).fill(false);
  check[s] = true;

  const queue = [[s, 0]];

  let min = Infinity;
  let idx = 0;
  while (queue.length > idx) {
    const [cur, time] = queue[idx++];
    if (cur === e) {
      min = Math.min(min, time);
    }

    if (!check[cur * 2] && cur * 2 <= 100000) {
      check[cur * 2] = true;
      queue.push([cur * 2, time]);
    }
    if (!check[cur - 1] && cur - 1 >= 0) {
      check[cur - 1] = true;
      queue.push([cur - 1, time + 1]);
    }

    if (!check[cur + 1] && cur + 1 <= 100000) {
      check[cur + 1] = true;
      queue.push([cur + 1, time + 1]);
    }
  }
  console.log(min);
  process.exit(0);
});
