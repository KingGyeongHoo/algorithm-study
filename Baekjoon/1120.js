const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const [a, b] = input.split(" ");
  let min = a.length;

  for (let i = 0; i <= b.length - a.length; i++) {
    let dif = 0;
    for (let j = i; j < i + a.length; j++) {
      if (a[j - i] !== b[j]) dif++;
    }
    min = Math.min(dif, min);
  }

  console.log(min);
  process.exit(0);
});
