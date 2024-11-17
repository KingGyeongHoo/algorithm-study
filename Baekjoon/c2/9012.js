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

  const isValid = (str) => {
    if (str[0] === ")" || str[str.length - 1] === "(") {
      return "NO";
    }
    const stack = [];
    for (let el of str) {
      const len = stack.length;
      if (stack.length === 0) {
        stack.push(el);
        continue;
      }
      if (el === "(") {
        stack.push(el);
      } else {
        if (stack[len - 1] === "(") {
          stack.pop();
        }
      }
    }
    return stack.length > 0 ? "NO" : "YES";
  };

  for (item of input) {
    console.log(isValid(item));
  }

  process.exit(0);
});
