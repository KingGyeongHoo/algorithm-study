const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  let max = 4;
  const dfs = (str) => {
    max = Math.max(max, Number(str));
    const plus4 = str + "4";
    const plus7 = str + "7";
    if (Number(plus4) <= input) {
      dfs(plus4);
    }
    if (Number(plus7) <= input) {
      dfs(plus7);
    }
  };

  dfs("");

  console.log(max);
  process.exit(0);
});
