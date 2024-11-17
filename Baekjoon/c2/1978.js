const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const arr = input[1];

  const isDem = (num) => {
    if (num === 1) return 0;
    if (num === 2 || num === 3) return 1;

    if (num % 2 === 0) return 0;

    for (let i = 3; i < num; i++) {
      if (num % i === 0) {
        return 0;
      }
    }
    return 1;
  };
  let ans = 0;
  for (let num of arr) {
    ans += isDem(num);
  }
  console.log(ans);

  process.exit(0);
});
