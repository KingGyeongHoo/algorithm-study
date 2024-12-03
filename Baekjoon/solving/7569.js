// const input = [
//   [5, 3, 2],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
// ];

// const input = [
//   [4, 3, 2],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [-1, -1, -1, -1],
//   [1, 1, 1, -1],
// ];

const input = [
  [5, 3, 1],
  [0, -1, 0, 0, 0],
  [-1, -1, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

const [x, y, z] = input.shift();
const map = [];
for (let i = 0; i < y * z; i += y) {
  map.push(input.slice(i, i + y));
}

const check = Array.from({ length: z }, () =>
  Array.from({ length: y }, () => Array(x).fill(false))
);

const move = [
  [1, 0, 0],
  [0, 1, 0],
  [-1, 0, 0],
  [0, -1, 0],
  [1, 0, 1],
  [0, 1, 1],
  [-1, 0, 1],
  [0, -1, 1],
  [1, 0, -1],
  [0, 1, -1],
  [-1, 0, -1],
  [0, -1, -1],
];

const queue = [];
for (let i = 0; i < z; i++) {
  for (let j = 0; j < y; j++) {
    for (let k = 0; k < x; k++) {
      if (map[i][j][k] === 1) {
        queue.push([i, j, k, 0]);
        check[i][j][k] = true;
      }
    }
  }
}

let max = 0;
let idx = 0;
while (queue.length > idx) {
  const [cz, cy, cx] = queue[idx++];

  if (map[cz][cy][cx] !== 1) {
    max = Math.max(max, map[cz][cy][cx]);
  }

  for (let [dz, dy, dx] of move) {
    const nz = cz + dz;
    const ny = cy + dy;
    const nx = cx + dx;

    if (nz >= 0 && nz < z && ny >= 0 && ny < y && nx >= 0 && nx < x) {
      if (!check[nz][ny][nx] && map[nz][ny][nx] === 0) {
        queue.push([nz, ny, nx]);
        check[nz][ny][nx] = true;
        map[nz][ny][nx] = map[cz][cy][cx] + 1;
      }
    }
  }
}

for (let i = 0; i < z; i++) {
  for (let j = 0; j < y; j++) {
    for (let k = 0; k < x; k++) {
      if (map[i][j][k] === 0) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(max);
