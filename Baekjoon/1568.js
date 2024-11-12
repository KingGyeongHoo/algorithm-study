const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  let time = 0;
  let sec = 1;
  while (input !== 0) {
    if (input < sec) {
      sec = 1;
    }
    input -= sec;
    sec++;
    time++;
  }
  console.log(time);
  process.exit(0);
});
