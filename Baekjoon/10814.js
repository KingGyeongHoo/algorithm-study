const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const n = input.shift();

  const arr = input
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((el) => el.join(" "))
    .join("\n");
  console.log(arr);
  process.exit(0);
});
