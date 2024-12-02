const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input[0];
  const fruits = input[1];

  let start = 0;
  let max = -1;
  const obj = {};
  for (let end = 0; end < n; end++) {
    const curFruit = fruits[end];
    obj[curFruit] ? (obj[curFruit] += 1) : (obj[curFruit] = 1);

    while (Object.keys(obj).length > 2) {
      const startF = fruits[start];
      obj[startF] -= 1;
      if (obj[startF] === 0) {
        delete obj[startF];
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
  }

  console.log(max);
  process.exit(0);
});
