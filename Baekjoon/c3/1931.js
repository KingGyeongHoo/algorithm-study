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
  const times = input.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let cnt = 1;
  let fastest = times.shift()[1];

  for (let [s, e] of times) {
    if (s >= fastest) {
      fastest = e;
      cnt++;
    }
  }
  console.log(cnt);

  process.exit(0);
});
