const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m] = input.shift();
  const nodes = input.splice(0, n - 1);

  const bfs = (start, end) => {
    const queue = [[start, 0]];
    const obj = { start: true };

    while (queue.length > 0) {
      const [cur, sum] = queue.shift();
      if (cur === end) {
        return sum;
      }

      for ([a, b, distance] of nodes) {
        if (a === cur && !obj[b]) {
          queue.push([b, sum + distance]);
          obj[b] = true;
        } else if (b === cur && !obj[a]) {
          queue.push([a, sum + distance]);
          obj[a] = true;
        }
      }
    }
  };

  for ([start, end] of input) {
    console.log(bfs(start, end));
  }
  process.exit(0);
});
