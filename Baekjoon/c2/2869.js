const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
}).on("close", () => {
  const [u, d, top] = input;

  console.log(Math.ceil((top - u) / (u - d)) + 1);

  process.exit(0);
});

//전체 나무의 길이에서 하루에 올리가는 길이를 뻄
// 이 값을 (up - down)으로 나누고 값을 올림 => 몫을 1일이라고 치면, 나머지는 시간. 일수는 총 2일이 걸리는 셈
//마지막에 남은만큼 올라가므로 +1
