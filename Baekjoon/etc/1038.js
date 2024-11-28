const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  let arr = [];
  const dfs = (num) => {
    const lastItem = num[num.length - 1];

    for (let i = 0; i < 10; i++) {
      if (Number(lastItem) > i) {
        const next = num + `${i}`;
        if (!arr.includes(next)) {
          dfs(next);
          arr.push(next);
        }
      }
    }
  };

  for (let i = 0; i < 10; i++) {
    arr.push(`${i}`);
    dfs(`${i}`);
  }

  arr = arr.map(Number).sort((a, b) => a - b);
  console.log(arr[input] ?? -1);
  process.exit(0);
});
