const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let len = 0;
rl.on("line", (line) => {
  len = Number(line);
}).on("close", () => {
  let stick = 64;
  let ans = 0;
  const queue = [stick];
  let sum = 0;
  while (stick > 1) {
    stick /= 2;
    queue.push(stick);
  }

  for (let num of queue) {
    if (sum === len) {
      break;
    }

    if (sum + num > len) {
      continue;
    } else {
      sum += num;
      ans++;
    }
  }

  console.log(ans);

  process.exit(0);
});
