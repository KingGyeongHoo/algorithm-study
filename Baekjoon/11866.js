const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [n, k] = input;
  const numArr = Array.from({ length: n }, (_, idx) => idx + 1);
  const queue = [];
  let i = 1;
  while (queue.length < n) {
    const num = numArr.shift();
    if (i % k === 0) {
      queue.push(num);
      i = 0;
    } else {
      numArr.push(num);
    }
    i++;
  }

  console.log(`<${queue.join(", ")}>`);
  process.exit(0);
});
