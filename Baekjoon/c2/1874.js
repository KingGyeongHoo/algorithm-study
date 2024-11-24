const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const n = input.shift();

  let result = [];
  const stack = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    const target = input[i];

    while (num <= target) {
      stack.push(num);
      num++;
      result.push("+");
    }

    const popItem = stack.pop();
    result.push("-");

    if (popItem !== target) {
      result = ["NO"];
      break;
    }
  }
  console.log(result.join("\n"));
  process.exit(0);
});
