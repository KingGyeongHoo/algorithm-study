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
  for (let str of input) {
    let [r, s] = str.split(" ");
    r = Number(r);
    let result = "";
    for (item of s) {
      for (let i = 0; i < r; i++) {
        result += item;
      }
    }
    console.log(result);
  }
  process.exit(0);
});
