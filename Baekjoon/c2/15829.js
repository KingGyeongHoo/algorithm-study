const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [num, arr] = input;
  const obj = {};
  for (let i = 97; i <= 122; i++) {
    obj[String.fromCharCode(i)] = BigInt(i - 96);
  }

  let ans = 0n;
  for (let i = 0; i < Number(num); i++) {
    ans += obj[arr[i]] * 31n ** BigInt(i);
  }
  console.log((ans % 1234567891n).toString());
  process.exit(0);
});
