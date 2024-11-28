const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [w, h, x, y, p] = input.shift();
  const r = h / 2;

  const isInArea = (cx, cy) => {
    const circleL = (cx - x) ** 2 + (cy - (y + r)) ** 2 <= r ** 2;
    const circleR = (cx - (x + w)) ** 2 + (cy - (y + r)) ** 2 <= r ** 2;
    const square = cx >= x && cx <= x + w && cy >= y && cy <= y + h;

    if (circleL || circleR || square) {
      return 1;
    } else {
      return 0;
    }
  };

  let ans = 0;
  for (let [cx, cy] of input) {
    ans += isInArea(cx, cy);
  }

  console.log(ans);
  process.exit(0);
});
