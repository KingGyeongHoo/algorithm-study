const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const cost = Number(input[0]);
  const n = Number(input[1]);
  let sum = 0;

  for (let i = 2; i < 2 + n; i++) {
    const [c, a] = input[i].split(" ").map(Number);
    sum += c * a;
  }
  sum === cost ? console.log("Yes") : console.log("No");

  process.exit(0);
});
