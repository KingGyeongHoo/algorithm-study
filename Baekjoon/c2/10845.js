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

  const queue = [];
  const ans = [];

  for (el of input) {
    const [c, v] = el.split(" ");
    if (c === "push") {
      queue.push(v);
    } else if (c === "pop") {
      ans.push(queue.length > 0 ? queue.shift() : -1);
    } else if (c === "size") {
      ans.push(queue.length);
    } else if (c === "empty") {
      ans.push(queue.length > 0 ? 0 : 1);
    } else if (c === "front") {
      ans.push(queue.length > 0 ? queue[0] : -1);
    } else if (c === "back") {
      ans.push(queue.length > 0 ? queue[queue.length - 1] : -1);
    }
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
