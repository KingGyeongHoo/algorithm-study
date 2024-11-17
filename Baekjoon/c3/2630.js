const input = [
  [8],
  [1, 1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1],
];

const [n] = input.shift();

const map = input;
const isComplete = Array.from({ length: n }, () => Array(n).fill(false));
const obj = { 0: 0, 1: 0 };

const bfs = (sy, sx, i) => {
  if (isComplete[sy][sx]) return;
  const start = map[sy][sx];

  let isAllSame = true;
  for (y = sy; y < sy + i; y++) {
    for (x = sx; x < sx + i; x++) {
      if (map[y][x] !== start) {
        isAllSame = false;
        break;
      }
    }
  }
  if (isAllSame) {
    obj[start] += 1;
    for (y = sy; y < sy + i; y++) {
      for (x = sx; x < sx + i; x++) {
        isComplete[y][x] = true;
      }
    }
  }
};

let i = n;
while (i >= 1) {
  for (let y = 0; y < n; y += i) {
    for (let x = 0; x < n; x += i) {
      bfs(y, x, i);
    }
  }
  i /= 2;
}

console.log(Object.values(obj).join("\n"));
