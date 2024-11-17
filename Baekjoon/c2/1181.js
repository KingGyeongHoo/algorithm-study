const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = input.shift();

  input = [...new Set(input)].sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );

  input.map((el) => console.log(el));
  process.exit(0);
});
