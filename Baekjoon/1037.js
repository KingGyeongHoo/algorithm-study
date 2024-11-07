const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = input.shift();
  const divs = input[0].split(" ").map(Number);
  console.log(Math.max(...divs) * Math.min(...divs));

  process.exit(0);
});
