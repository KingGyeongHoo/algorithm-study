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
  const max = 100000;
  const check = Array(max).fill(false);

  const queue = [[s, 0]];
  check[s] = true;

  while (queue.length > 0) {
    const [cur, time] = queue.shift();
    if (cur === e) {
      console.log(time);
      break;
    }

    if (0 <= cur + 1 && cur + 1 <= max && !check[cur + 1]) {
      queue.push([cur + 1, time + 1]);
      check[cur + 1] = true;
    }
    if (0 <= cur - 1 && cur - 1 <= max && !check[cur - 1]) {
      queue.push([cur - 1, time + 1]);
      check[cur - 1] = true;
    }
    if (0 <= cur * 2 && cur * 2 <= max && !check[cur * 2]) {
      queue.push([cur * 2, time + 1]);
      check[cur * 2] = true;
    }
  }

  process.exit(0);
});
