let input = ["3 10", "1", "2", "5"];
const [n, num] = input.shift().split(" ").map(Number);
const coin = [...input].map(Number);

let ans = 0;
const dp = Array(num + 1).fill(0);
dp[0] = 1;

for (let c of coin) {
  for (let i = c; i <= num; i++) {
    dp[i] += dp[i - c];
  }
}
console.log(dp);
