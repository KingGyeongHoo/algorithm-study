const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  const factorial = (num) => {
    num = BigInt(num);
    let sum = 1n;
    for (let i = 2n; i <= num; i++) {
      sum *= i;
    }
    return sum.toString();
  };

  const str = factorial(input);
  let zero = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "0") {
      zero++;
    } else {
      console.log(zero);
      break;
    }
  }
  process.exit(0);
});
