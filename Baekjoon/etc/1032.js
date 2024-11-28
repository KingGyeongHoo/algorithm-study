const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = input.shift();

  let str = "";
  for (let i = 0; i < input[0].length; i++) {
    const first = input[0][i];
    let isSame = true;
    for (let j = 1; j < input.length; j++) {
      if (input[j][i] === first) {
        continue;
      } else {
        isSame = false;
        break;
      }
    }
    str += isSame ? first : "?";
  }

  console.log(str);
  process.exit(0);
});
