const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input.shift());
  const len = Number(input.shift());
  const target = input.shift();

  let ans = 0;
  let i = 0;
  let cnt = 0;

  while (i < len - 1) {
    if (target[i] === "I" && target.slice(i, i + 3) === "IOI") {
      cnt++;
      if (cnt >= n) ans++;
      i += 2;
    } else {
      cnt = 0;
      i += 1;
    }
  }
  console.log(ans);
  process.exit(0);
});
