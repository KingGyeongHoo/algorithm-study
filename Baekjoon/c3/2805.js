const input = [
  [4, 7],
  [20, 15, 10, 17],
];

const [n, m] = input.shift();
const trees = input.shift().sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];
let max = -1;

while (start <= end) {
  let cut = Math.floor((start + end) / 2);

  let sum = 0;
  for (let tree of trees) {
    if (tree > cut) sum += tree - cut;
  }

  if (sum >= m) {
    max = Math.max(max, cut);
    start = cut + 1;
  } else {
    end = cut - 1;
  }
}

console.log(max);
