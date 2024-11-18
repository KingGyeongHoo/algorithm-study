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

  const pocketmons = input.slice(0, n);
  const q = input.slice(n);

  const obj = {};
  pocketmons.forEach((el, idx) => (obj[el] = idx + 1));

  const ans = [];
  for (let p of q) {
    if (Number.isNaN(p / 1)) {
      ans.push(obj[p]);
    } else {
      ans.push(pocketmons[p / 1 - 1]);
    }
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
