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

  while (input >= 5) {
    num += parseInt(input / 5);
    input /= 5;
  }

  console.log(num);
  process.exit(0);
});
