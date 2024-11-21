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

  for (let num = 0; num < input.length; num += 2) {
    const [k, n] = input.slice(num, num + 2);
    const apt = Array.from({ length: k + 1 }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      apt[0][i] = i + 1;
    }

    for (let f = 1; f <= k; f++) {
      for (let r = 0; r < n; r++) {
        if (r === 0) {
          apt[f][r] = apt[f - 1][r];
        } else {
          apt[f][r] = apt[f - 1][r] + apt[f][r - 1];
        }
      }
    }

    console.log(apt[k][n - 1]);
  }
  process.exit(0);
});
