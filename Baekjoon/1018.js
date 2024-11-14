const input = [
  ["10", "13"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W", "B"],
  ["W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B", "B"],
  ["W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B", "W", "B"],
];

const [h, w] = input.shift().map(Number);

const rightMap = (start, map) => {
  let wrong = 0;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
        map[y][x] !== start && wrong++;
      } else {
        map[y][x] === start && wrong++;
      }
    }
  }
  return wrong;
};

for (let y = 0; y <= h - 8; y++) {
  for (let x = 0; x <= w - 8; x++) {
    const newMap = input.slice(y, y + 8).map((row) => row.slice(x, x + 8));
    // if (y === 2 && x === 2) rightMap(input[y][x], newMap);
    console.log(y, x);
    console.log(rightMap(input[y][x], newMap));
  }
}
