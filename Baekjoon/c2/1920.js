const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const nums = input[1];
  const numbers = input[3];

  const obj = {};
  for (let num of nums) {
    obj[num] = true;
  }

  const arr = [];
  for (number of numbers) {
    if (!obj[number]) {
      arr.push(0);
    } else {
      arr.push(1);
    }
  }
  console.log(arr.join("\n"));
  process.exit(0);
});
