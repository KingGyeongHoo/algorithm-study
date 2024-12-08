// const input = [
//   [4, 3],
//   [1, 2, 3, 4],
//   [2, 3, 4, 5],
//   [3, 4, 5, 6],
//   [4, 5, 6, 7],
//   [2, 2, 3, 4],
//   [3, 4, 3, 4],
//   [1, 1, 4, 4],
// ];

const input = [
  [2, 4],
  [1, 2],
  [3, 4],
  [1, 1, 1, 1],
  [1, 2, 1, 2],
  [2, 1, 2, 1],
  [2, 2, 2, 2],
];

const [n, m] = input.shift();

const map = input.slice(0, n);
const target = input.slice(n);
const move = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const getDp = (sy, sx, ty, tx) => {
  const dp = Array.from({ length: ty - sy + 2 }, () =>
    Array(tx - sx + 2).fill(0)
  );

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] =
        dp[i - 1][j] +
        dp[i][j - 1] -
        dp[i - 1][j - 1] +
        map[i + sy - 1][j + sx - 1];
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

const ans = [];
for (let arr of target) {
  const [sy, sx, ty, tx] = arr.map((el) => el - 1);
  ans.push(getDp(sy, sx, ty, tx));
}

console.log(ans.join("\n"));
