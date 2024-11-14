const input = [[3], [10, 20, 30]];
const score = input[1];
const max = Math.max(...score);

console.log(
  score.map((el) => (el / max) * 100).reduce((acc, cur) => acc + cur, 0) /
    score.length
);
