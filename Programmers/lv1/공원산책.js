function solution(park, routes) {
  const h = park.length;
  const w = park[0].length;

  let [cx, cy] = [0, 0];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (park[y][x] === "S") {
        cy = y;
        cx = x;
        break;
      }
    }
  }

  for (let route of routes) {
    let [dir, amt] = route.split(" ");
    amt = Number(amt);
    const [dy, dx] = getMove(dir);

    let isBreaked = false;
    for (let i = 1; i <= amt; i++) {
      const ny = cy + dy * i;
      const nx = cx + dx * i;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w || park[ny][nx] === "X") {
        isBreaked = true;
        break;
      }
    }
    if (!isBreaked) {
      cy = cy + dy * amt;
      cx = cx + dx * amt;
    }
  }
  return [cy, cx];
}

const getMove = (type) => {
  if (type === "E") return [0, 1];
  else if (type === "W") return [0, -1];
  else if (type === "S") return [1, 0];
  else if (type === "N") return [-1, 0];
};
