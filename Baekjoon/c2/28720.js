const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const intArr = input.map(Number);
  let int = 0;
  for (let i = 0; i < 3; i++) {
    if (intArr[i]) {
      int = i;
    }
  }
  const next = intArr[int] + (3 - int);

  if (next % 3 === 0 && next % 5 !== 0) {
    console.log("Fizz");
  } else if (next % 3 !== 0 && next % 5 === 0) {
    console.log("Buzz");
  } else if (next % 3 === 0 && next % 5 === 0) {
    console.log("FizzBuzz");
  } else if (next % 3 !== 0 && next % 5 !== 0) {
    console.log(next);
  }
  process.exit(0);
});
