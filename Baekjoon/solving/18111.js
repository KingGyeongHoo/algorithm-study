// const map = [
//   [3, 4, 99],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 1],
// ];
const map = [
  [3, 4, 1],
  [64, 64, 64, 64],
  [64, 64, 64, 64],
  [64, 64, 64, 63],
];

const [n, m, b] = map.shift();
const grounds = map.flat();

const getTimes = (target, b) => {
  let blocks = b;
  let time = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (blocks <= 0) continue;
      const ground = map[y][x];
      if (ground > target) {
        time += 2 * (ground - target);
        blocks += ground - target;
      } else if (ground < target) {
        time += target - ground;
        blocks -= target - ground;
      }
    }
  }
  return [time, target];
};

const ans = [];
for (let i = Math.min(...grounds); i <= Math.max(...grounds); i++) {
  ans.push(getTimes(i, b));
}
console.log(ans.sort((a, b) => a[0] - b[0] || b[1] - a[1])[0].join(" "));
