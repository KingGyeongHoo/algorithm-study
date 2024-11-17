const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const [x, y] = input.split(" ").map(Number);

  const gcd = (a, b) => {
    for (let i = Math.min(a, b); i >= 1; i--) {
      if (a % i === 0 && b % i === 0) {
        return i;
      }
    }
  };

  const lcm = (a, b) => {
    let i = Math.max(a, b);
    while (i < a * b) {
      if (i % a === 0 && i % b === 0) {
        break;
      }
      i++;
    }
    return i;
  };

  console.log(gcd(x, y));
  console.log(lcm(x, y));

  process.exit(0);
});
