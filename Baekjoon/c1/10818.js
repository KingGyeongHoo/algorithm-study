const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  console.log(Math.min(...input[1]), Math.max(...input[1]));

  process.exit(0);
});

console.log("0".codePointAt()); // 65
