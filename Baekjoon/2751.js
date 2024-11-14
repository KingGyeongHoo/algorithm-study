const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  input.shift();
  console.log(input.sort((a, b) => a - b).join("\n"));

  process.exit(0);
});
