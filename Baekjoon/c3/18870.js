const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input[0];
  const nums = input[1].map((e) => e).sort((a, b) => a - b);

  const set = [...new Set(nums)];
  const obj = {};
  set.forEach((el, idx) => (obj[el] = idx));

  let ans = [];
  for (let num of input[1]) {
    ans.push(obj[num]);
  }

  console.log(ans.join(" "));
  process.exit(0);
});
