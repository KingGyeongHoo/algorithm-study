const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const isBal = (arr) => {
    const stack = [];

    for (let item of arr) {
      const last = stack.length - 1;

      if (item === "(" || item === "[") {
        stack.push(item);
      }
      if (item === ")") {
        if (stack[last] === "(") {
          stack.pop();
        } else {
          stack.push(item);
        }
      }
      if (item === "]") {
        if (stack[last] === "[") {
          stack.pop();
        } else {
          stack.push(item);
        }
      }
    }
    return stack.length > 0 ? "no" : "yes";
  };

  const ans = [];
  for (let str of input) {
    if (str !== ".") {
      str = str
        .split("")
        .filter((el) => el === "(" || el == ")" || el === "[" || el === "]");
      ans.push(isBal(str));
    }
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
