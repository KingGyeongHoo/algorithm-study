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

  const map = {};
  const bfs = (start, startIdx) => {
    const checkObj = {};
    nums.forEach((el, idx) => (checkObj[idx] = false));
    checkObj[startIdx] = true;
    const queue = [[start, { ...checkObj }, [start]]];
    let str = "";

    const array = [];
    while (queue.length > 0) {
      const [cur, check, arr] = queue.shift();
      if (arr.length === m) {
        if (!map[arr.join(" ")]) {
          array.push(arr.join(" "));
          map[arr.join(" ")] = true;
        }

        continue;
      }

      for (let i = 0; i < n; i++) {
        const next = nums[i];
        if (!check[i]) {
          const newCheck = { ...check };
          newCheck[i] = true;
          queue.push([cur, newCheck, [...arr, next]]);
        }
      }
    }
    return array;
  };

  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(bfs(nums[i], i));
  }
  console.log(ans.flat().join("\n"));
  process.exit(0);
});
