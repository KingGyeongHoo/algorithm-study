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
  const size = input[1];
  const [t, p] = input[2];

  let tshirt = 0;

  for (item of size) {
    tshirt += Math.ceil(item / t);
  }

  console.log(tshirt);
  console.log(Math.floor(n / p), n % p);
  process.exit(0);
});
