const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const max = Math.max(...input);
  console.log(max);
  console.log(input.indexOf(max) + 1);
  process.exit(0);
});
