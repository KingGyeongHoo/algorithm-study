const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", (line) => {
  n = Number(line);
}).on("close", () => {
  let last = (n / 3) * 5 + (n / 3 - 1);
  const map = Array.from({ length: n }, () => Array(last).fill(" "));
  map[0][Math.floor(last / 2)] = "*";

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < last; j++) {
      if (i % 3 === 0) {
        if (
          ((map[i - 1][j + 1] === "*" && map[i - 1][j - 1] !== "*") ||
            (map[i - 1][j - 1] === "*" && map[i - 1][j + 1] !== "*")) &&
          map[i - 1][j] === " "
        ) {
          map[i][j] = "*";
        }
      }
      if (i % 3 === 1) {
        if (map[i - 1][j + 1] === "*" || map[i - 1][j - 1] === "*") {
          map[i][j] = "*";
        }
      }
      if (i % 3 === 2) {
        if (
          map[i - 1][j + 1] === "*" ||
          map[i - 1][j - 1] === "*" ||
          map[i - 1][j] === "*"
        ) {
          map[i][j] = "*";
        }
      }
    }
  }
  console.log(map.map((el) => el.join("")).join("\n"));
  process.exit(0);
});
