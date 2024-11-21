const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n] = input.shift();
  for (let [h, w, n] of input) {
    let room = 0;
    let floor = 0;
    if (n % h === 0) {
      floor = h;
      room = n / h;
    } else {
      floor = n % h;
      room = Math.ceil(n / h);
    }

    console.log(`${floor}${room.toString().padStart(2, "0")}`);
  }

  process.exit(0);
});
