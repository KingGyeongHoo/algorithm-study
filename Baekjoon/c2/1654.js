const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, k] = input.shift().split(" ").map(Number);
  const lans = input.map(Number);

  let start = 1;
  let end = Math.max(...lans);
  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const sum = lans.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
    if (sum >= k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);

  process.exit(0);
});
