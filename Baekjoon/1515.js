const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", (line) => {
  input = line.split("").map(Number);
}).on("close", () => {
  let curNum = 0;
  let idx = 0;

  while (idx < input.length) {
    curNum++;

    const numArr = `${curNum}`.split("").map(Number);
    for (let num of numArr) {
      if (num === input[idx]) {
        idx++;
      }
    }
  }
  console.log(curNum);

  process.exit(0);
});
