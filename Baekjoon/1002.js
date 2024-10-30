const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const n = input[0];
  for (let i = 1; i <= n; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i];

    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if (distance === 0 && r1 === r2) {
      console.log(-1);
    } else if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) {
      console.log(1);
    } else if (Math.abs(r1 - r2) < distance && distance < r1 + r2) {
      console.log(2);
    } else {
      console.log(0);
    }
  }

  process.exit(0);
});
