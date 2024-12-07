const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [n, len] = input;

  const ans = [];
  const dfs = (cur, arr) => {
    if (arr.length === len) {
      ans.push(arr.join(" "));
      return;
    }

    for (let next = cur; next <= n; next++) {
      dfs(next, [...arr, next]);
    }
  };

  for (let i = 1; i <= n; i++) {
    dfs(i, [i]);
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
