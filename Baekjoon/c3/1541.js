const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const form = [
    "(",
    ...input
      .split(/(?=[+-])|(?<=[+-])/)
      .map((el) => (el !== "-" && el !== "+" ? el / 1 : el)),
    ")",
  ];

  for (let i = 0; i < form.length; i++) {
    if (form[i] === "-") {
      form[i] = ")-(";
    }
  }

  console.log(eval(form.join("")));
  process.exit(0);
});
