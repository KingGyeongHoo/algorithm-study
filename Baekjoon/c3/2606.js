const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [c] = input.shift();
  const [n] = input.shift();

  const virus = { 1: true };

  const queue = [1];
  while (queue.length > 0) {
    const cur = queue.shift();

    for (let [a, b] of input) {
      if (a === cur && !virus[b]) {
        virus[b] = true;
        queue.push(b);
      } else if (b === cur && !virus[a]) {
        virus[a] = true;
        queue.push(a);
      }
    }
  }
  console.log(Object.values(virus).length - 1);
  process.exit(0);
});
