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
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i] / 1)) {
      const num = input[i] / 1;
      const clothes = input.slice(i + 1, i + num + 1);
      const obj = {};
      clothes.forEach((el) => {
        const [kind, type] = el.split(" ");
        if (!obj[type]) obj[type] = [];
        obj[type].push(kind);
      });
      const kinds = Object.values(obj);
      ans.push(kinds.reduce((acc, cur) => acc * (cur.length + 1), 1) - 1);
    }
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
