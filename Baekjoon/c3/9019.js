const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = input.shift();

  const ans = [];
  for (str of input) {
    const [s, e] = str.split(" ").map(Number);
    const check = {};
    const queue = [[s, ""]];
    check[s] = true;

    while (queue.length > 0) {
      const [n, command] = queue.shift();
      if (n === e) {
        ans.push(command);
        break;
      }

      for (let num of [1, 2, 3, 4]) {
        if (num === 1) {
          const next = n * 2 > 9999 ? (n * 2) % 10000 : n * 2;
          if (!check[next]) {
            check[next] = true;
            queue.push([next, command + "D"]);
          }
        } else if (num === 2) {
          const next = n - 1 === -1 ? 9999 : n - 1;
          if (!check[next]) {
            check[next] = true;
            queue.push([next, command + "S"]);
          }
        } else if (num === 3) {
          const first = Math.floor(n / 1000);
          const rest = n % 1000;
          const next = rest * 10 + first;
          if (!check[next]) {
            check[next] = true;
            queue.push([next, command + "L"]);
          }
        } else if (num === 4) {
          const last = n % 10;
          const rest = Math.floor(n / 10);
          const next = last * 1000 + rest;
          if (!check[next]) {
            check[next] = true;
            queue.push([next, command + "R"]);
          }
        }
      }
    }
  }
  console.log(ans.join("\n"));

  process.exit(0);
});
