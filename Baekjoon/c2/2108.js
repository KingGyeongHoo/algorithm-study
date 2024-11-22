const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const n = input.shift();
  input.sort((a, b) => a - b);
  const mean = input.reduce((acc, cur) => acc + cur, 0) / n;
  const median = input[Math.floor(n / 2)];

  const obj = {};
  input.forEach((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  const max = Math.max(...Object.values(obj));

  const entry = Object.entries(obj)
    .filter((el) => el[1] === max)
    .sort((a, b) => a[0] - b[0]);
  const mode = entry.length > 1 ? entry[1] : entry[0];
  const range = input[n - 1] - input[0];

  console.log(Math.round(mean).toString());
  console.log(median);
  console.log(mode[0]);
  console.log(range);
  process.exit(0);
});
