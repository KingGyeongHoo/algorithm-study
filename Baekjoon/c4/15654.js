const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m] = input[0];
  const nums = input[1].sort((a, b) => a - b);

  const bfs = (start) => {
    const checkObj = {};
    nums.forEach((el) => (checkObj[el] = false));
    checkObj[start] = true;
    const queue = [[start, { ...checkObj }, [start]]];
    let str = "";

    const array = [];
    while (queue.length > 0) {
      const [cur, check, arr] = queue.shift();
      if (arr.length === m) {
        array.push(arr.join(" "));
        continue;
      }

      for (let next of nums) {
        if (!check[next]) {
          const newCheck = { ...check };
          newCheck[next] = true;
          queue.push([next, newCheck, [...arr, next]]);
        }
      }
    }
    return array;
  };

  const ans = [];
  for (let num of nums) {
    ans.push(bfs(num));
  }
  console.log(ans.flat().join("\n"));
  process.exit(0);
});
