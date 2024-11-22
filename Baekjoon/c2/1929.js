const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  let [s, e] = input;

  const arr = Array(e + 1)
    .fill(0)
    .map((_, idx) => idx);

  arr[1] = 0;
  for (let num of arr) {
    if (num !== 0) {
      let i = 2;
      while (num * i <= e) {
        arr[num * i] = 0;
        i++;
      }
    }
  }
  console.log(
    arr
      .slice(s, e + 1)
      .filter((el) => el !== 0)
      .join("\n")
  );
  process.exit(0);
});
