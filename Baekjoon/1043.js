let input = [
  "10 9",
  "4 1 2 3 4",
  "2 1 5",
  "2 2 6",
  "1 7",
  "1 8",
  "2 7 8",
  "1 9",
  "1 10",
  "2 3 10",
  "1 4",
];

input = input.map((el) => el.split(" ").map(Number));

let [n, m] = input.shift();
const obj = {};
for (let i = 1; i <= n; i++) {
  obj[i] = false;
}

const truth = input.shift();
for (let i = 1; i < truth.length; i++) {
  obj[truth[i]] = true;
}

for (let item of input) {
  console.log(obj);
  item.shift();
  let isTruth = false;
  for (p of item) {
    if (obj[p]) {
      isTruth = true;
      break;
    }
  }
  if (isTruth) {
    for (p of item) {
      obj[p] = true;
    }
    m -= 1;
  }
}

console.log(m);
