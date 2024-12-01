const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input.shift();
  const ans = [];

  const getGcd = (a, b) => {
    if (b == 0) return a;
    return a > b ? getGcd(b, a % b) : getGcd(a, b % a);
  };

  const getLcm = (a, b) => {
    return (a * b) / getGcd(a, b);
  };
  for (let [m, n, tx, ty] of input) {
    const lcm = getLcm(m, n);
    let result = -1;

    let x = tx;
    let y = ty;
    while (true) {
      if (x > lcm || y > lcm) {
        break;
      }
      if (x > y) {
        y += n;
      } else if (x < y) {
        x += m;
      } else {
        result = x;
        break;
      }
    }
    ans.push(result);
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
