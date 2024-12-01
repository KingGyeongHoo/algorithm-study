const input = [
  "7",
  "0110100",
  "0110101",
  "1110101",
  "0000111",
  "0100000",
  "0111110",
  "0111000",
];

const n = Number(input.shift());
const map = input.map((el) => el.split(""));
const check = Array.from({ length: n }, () => Array(n).fill(false));
const move = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const bfs = (sy, sx) => {
  const queue = [[sy, sx]];
  check[sy][sx] = true;
  let house = 1;

  while (queue.length > 0) {
    const [cy, cx] = queue.shift();

    for ([dy, dx] of move) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        if (!check[ny][nx] && map[ny][nx] === "1") {
          queue.push([ny, nx]);
          check[ny][nx] = true;
          house += 1;
        }
      }
    }
  }
  return house;
};

let arr = [];
for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (map[y][x] === "1" && !check[y][x]) {
      arr.push(bfs(y, x));
    }
  }
}
arr.sort((a, b) => a - b);

console.log(arr.length);
console.log(arr.join("\n"));
