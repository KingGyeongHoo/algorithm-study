const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  let num = 0;
  let start = 666;
  while (num !== input) {
    if (start.toString().includes("666")) {
      num++;
    }
    start++;
  }
  console.log(start - 1);

  process.exit(0);
});
