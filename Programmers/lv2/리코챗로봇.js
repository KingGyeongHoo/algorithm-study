function solution(board) {
  const n = board.length;
  const m = board[0].length;

  const check = Array.from({ length: n }, () => Array(m).fill(false));
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const bfs = (sy, sx) => {
    const queue = [[sy, sx, 0]];
    check[sy][sx] = true;

    while (queue.length > 0) {
      let [cy, cx, totalM] = queue.shift();

      if (board[cy][cx] === "G") {
        return totalM;
      }

      for (let [dy, dx] of move) {
        let ny = cy + dy;
        let nx = cx + dx;

        while (
          ny >= 0 &&
          ny < n &&
          nx >= 0 &&
          nx < m &&
          board[ny][nx] !== "D"
        ) {
          ny += dy;
          nx += dx;
        }
        ny -= dy;
        nx -= dx;
        if (!check[ny][nx]) {
          queue.push([ny, nx, totalM + 1]);
          check[ny][nx] = true;
        }
      }
    }
    return -1;
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (board[y][x] === "R") return bfs(y, x);
    }
  }
}
