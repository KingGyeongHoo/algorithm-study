const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let ans = "";
  const maxArr = input.map((el) => el.length);
  const max = Math.max(...maxArr);
  for (let i = 0; i < max; i++) {
    let str = "";
    for (let j = 0; j < input.length; j++) {
      if (input[j][i]) str += input[j][i];
    }
    ans += str;
  }

  console.log(ans);
  process.exit(0);
});
