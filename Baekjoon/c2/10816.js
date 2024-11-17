const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const nums = input[3];
  const obj = {};
  for (n of nums) {
    obj[n] = 0;
  }
  const numbers = input[1];
  for (let number of numbers) {
    if (!obj[number]) obj[number] = 0;
    obj[number]++;
  }

  const arr = nums.map((el) => obj[el]).join("\n");
  console.log(arr);
  process.exit(0);
});
