const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [a, b] = input;
  const check = {};
  const queue = [[a, 1]];
  check[a] = true;

  let idx = 0;
  while (queue.length > idx) {
    const [cur, cnt] = queue[idx++];

    if (cur === b) {
      console.log(cnt);
      return;
    }

    if (!check[cur * 2] && cur * 2 <= b) {
      check[cur * 2] = true;
      queue.push([cur * 2, cnt + 1]);
    }

    if (!check[cur * 10 + 1] && cur * 2 <= b) {
      check[cur * 10 + 1] = true;
      queue.push([cur * 10 + 1, cnt + 1]);
    }
  }
  console.log(-1);
  process.exit(0);
});
