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

  const stack = [];
  const ans = [];

  for (el of input) {
    const [c, v] = el.split(" ");
    if (c === "push") {
      stack.push(v);
    } else if (c === "pop") {
      ans.push(stack.length > 0 ? stack.pop() : -1);
    } else if (c === "size") {
      ans.push(stack.length);
    } else if (c === "empty") {
      ans.push(stack.length > 0 ? 0 : 1);
    } else if (c === "top") {
      ans.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    }
  }

  console.log(ans.join("\n"));
  process.exit(0);
});
