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

  let ranking = Array(n).fill(0);

  for (let i in input) {
    const [w, h] = input[i];
    const rank = input.filter((el) => el[0] > w && el[1] > h).length + 1;
    ranking[i] = rank;
  }
  console.log(ranking.join(" "));
  process.exit(0);
});
