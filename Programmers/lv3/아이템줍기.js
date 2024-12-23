function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from({ length: 102 }, () => Array(102).fill(0));
  const check = Array.from({ length: 102 }, () => Array(102).fill(false));
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  rectangle = rectangle.map((el) => el.map((e) => e * 2));

  for ([sx, sy, ex, ey] of rectangle) {
    for (let y = sy; y <= ey; y++) {
      for (let x = sx; x <= ex; x++) {
        if (x === sx || x === ex || y === sy || y === ey) {
          map[y][x] = 1;
        }
      }
    }
  }
  for ([sx, sy, ex, ey] of rectangle) {
    for (let y = sy + 1; y < ey; y++) {
      for (let x = sx + 1; x < ex; x++) {
        map[y][x] = 0;
      }
    }
  }
  const queue = [[characterY * 2, characterX * 2, 0]];
  check[characterY * 2][characterX * 2] = true;

  let min = Infinity;
  while (queue.length > 0) {
    const [cy, cx, m] = queue.shift();

    if (cy === itemY * 2 && cx === itemX * 2) {
      return m / 2;
    }

    for (let [dy, dx] of move) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (ny >= 0 && ny < 102 && nx >= 0 && nx < 102) {
        if (!check[ny][nx] && map[ny][nx] === 1) {
          check[ny][nx] = true;
          queue.push([ny, nx, m + 1]);
        }
      }
    }
  }
  return min;
}
