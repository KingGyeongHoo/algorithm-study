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
  const result = [];
  const handleStack = (str) => {
    const [command, x] = str.split(" ");
    if (command === "1") {
      stack.push(x);
    } else if (command === "2") {
      stack.length > 0 ? result.push(stack.pop()) : result.push(-1);
    } else if (command === "3") {
      result.push(stack.length);
    } else if (command === "4") {
      stack.length > 0 ? result.push(0) : result.push(1);
    } else if (command === "5") {
      stack.length > 0 ? result.push(stack[stack.length - 1]) : result.push(-1);
    }
  };

  for (command of input) {
    handleStack(command);
  }

  console.log(result.join("\n"));

  process.exit(0);
});
