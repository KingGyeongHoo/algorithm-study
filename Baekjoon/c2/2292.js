const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = Number(line);
}).on("close", () => {
  let room = 1;
  depth = 1;
  while (room < input) {
    room += 6 * depth;
    depth++;
  }
  console.log(depth);
  process.exit(0);
});
