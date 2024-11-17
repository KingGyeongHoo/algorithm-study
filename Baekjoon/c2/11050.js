const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [n, k] = input;

  const fact = (num) => {
    let result = 1;
    for (let i = num; i >= 2; i--) {
      result *= i;
    }
    return result;
  };

  console.log(fact(n) / fact(n - k) / fact(k));
  process.exit(0);
});
