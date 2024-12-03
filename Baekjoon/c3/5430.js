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

  const ans = [];
  for (let i = 0; i < n * 3; i += 3) {
    let [command, num, arr] = input.slice(i, i + 3);
    arr = arr.split(/[\[\],]+/).filter(Boolean);
    num = Number(num);

    let isReverse = false;
    let start = 0;
    let end = num;
    for (let c of command) {
      if (c === "R") isReverse = !isReverse;
      if (c === "D") {
        if (isReverse) {
          end -= 1;
        } else {
          start += 1;
        }
      }
    }
    if (start > end) {
      ans.push("error");
    } else {
      let newArr = arr.slice(start, end);
      if (isReverse) newArr = newArr.reverse();

      ans.push(`[${newArr.join(",")}]`);
    }
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
