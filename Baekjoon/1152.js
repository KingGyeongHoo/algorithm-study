const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(line.trim().split(" ").filter(Boolean).length);
}).on("close", () => {
  process.exit(0);
});
