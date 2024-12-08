const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  let [a, b, c] = input.map(BigInt);
  const rem = (p) => {
    if (p === 1n) return a % c;

    const half = rem(p / 2n) % c;

    if (p % 2n === 1n) {
      return (half * half * (a % c)) % c;
    }
    return (half * half) % c;
  };

  console.log(rem(b).toString());
  process.exit(0);
});
