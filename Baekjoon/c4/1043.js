const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  let [n, m] = input.shift();

  const [num, ...t] = input.shift();
  const truth = new Set(t);

  let i = 0;
  while (i < n) {
    for (let [number, ...members] of input) {
      const hasTruth = members.some((m) => truth.has(m));
      if (hasTruth) {
        members.forEach((m) => truth.add(m));
      }
    }
    i++;
  }

  let count = 0;
  for (let [number, ...members] of input) {
    const hasTruth = members.some((m) => truth.has(m));
    if (!hasTruth) {
      count++;
    }
  }
  console.log(count);

  process.exit(0);
});
