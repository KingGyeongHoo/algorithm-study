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
  if (n === 0) {
    console.log(0);
    return;
  }

  const cut = Math.round(n * 0.15);

  console.log(
    Math.round(
      input
        .sort((a, b) => a - b)
        .slice(cut, n - cut)
        .reduce((acc, cur) => acc + cur, 0) /
        (n - 2 * cut)
    )
  );
  process.exit(0);
});
