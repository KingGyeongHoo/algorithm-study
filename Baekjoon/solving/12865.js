// const input = [
//   [4, 7],
//   [6, 13],
//   [4, 8],
//   [3, 6],
//   [5, 12],
// ];

const input = [
  [7, 4],
  [4, 3],
  [4, 4],
  [1, 3],
  [3, 7],
  [2, 1],
  [2, 6],
  [1, 4],
];

const [n, k] = input.shift();
const weight = input.map((el) => el[0]);
const value = input.map((el) => el[1]);

let start = 0;
const backpack = [];
let w = 0;
let v = 0;

let max = 0;
for (let end = 0; end < n; end++) {
  const curItem = weight[end];
  const curValue = value[end];

  backpack.push(curItem);
  w += curItem;
  v += curValue;

  while (w > k) {
    const startItem = weight[start];
    const startValue = value[start];
    backpack.shift();
    w -= startItem;
    v -= startValue;
    start++;
  }
  console.log(backpack);
  max = Math.max(
    max,
    value.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0)
  );
}
console.log(max);
