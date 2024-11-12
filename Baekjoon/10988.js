const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(isPal(line));
}).on("close", () => {
  process.exit(0);
});

const isPal = (str) => {
  if (str.length % 2 === 0) {
    const half = str.length / 2;
    const a = str.slice(0, half);
    const b = str.slice(half).split("").reverse().join("");

    if (a === b) return 1;
  } else {
    const half = Math.floor(str.length / 2);
    const a = str.slice(0, half);
    const b = str
      .slice(half + 1)
      .split("")
      .reverse()
      .join("");
    if (a === b) return 1;
  }
  return 0;
};
