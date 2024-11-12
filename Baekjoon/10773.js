const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const n = input.shift();

  const stack = [];

  for (item of input) {
    if (item === 0) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
  process.exit(0);
});
