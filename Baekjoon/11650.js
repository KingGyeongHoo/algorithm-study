const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  input.shift();

  console.log(
    input
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
      .map((el) => el.join(" "))
      .join("\n")
  );
  process.exit(0);
});
