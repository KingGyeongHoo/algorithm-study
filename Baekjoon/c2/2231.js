const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  for (let i = 1; i <= input; i++) {
    const sum =
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0) + i;
    if (sum === input) {
      console.log(i);
      return;
    }
  }
  console.log(0);
  process.exit(0);
});
