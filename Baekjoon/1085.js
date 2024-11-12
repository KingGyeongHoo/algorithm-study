const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [x, y, w, h] = input;
  console.log(Math.min(x, y, w - x, h - y));
  process.exit(0);
});
