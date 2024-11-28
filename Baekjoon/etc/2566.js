const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  let max = -1;
  let maxIdx = [0, 0];

  for (let i = 0; i < input.length; i++) {
    const lineMax = Math.max(...input[i]);
    const lineMaxIdx = [i + 1, input[i].indexOf(lineMax) + 1];

    if (lineMax > max) {
      max = lineMax;
      maxIdx = lineMaxIdx;
    }
  }
  console.log(max);
  console.log(maxIdx[0], maxIdx[1]);
  process.exit(0);
});
