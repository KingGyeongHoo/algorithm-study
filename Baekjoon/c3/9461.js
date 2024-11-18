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
  const getP = (num) => {
    const arr = Array(num).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 1;

    for (let i = 3; i < num; i++) {
      arr[i] = arr[i - 2] + arr[i - 3];
    }
    return arr[arr.length - 1];
  };

  const ans = [];
  for (num of input) {
    ans.push(getP(num));
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
