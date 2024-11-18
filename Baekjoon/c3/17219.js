const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input.shift().split(" ").map(Number);

  const obj = {};
  const queries = input.slice(0, n).forEach((el) => {
    const [site, pw] = el.split(" ");
    obj[site] = pw;
  });

  const ans = input
    .slice(n)
    .map((el) => obj[el])
    .join("\n");
  console.log(ans);
  process.exit(0);
});
