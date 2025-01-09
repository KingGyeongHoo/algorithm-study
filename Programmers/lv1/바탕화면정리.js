function solution(wallpaper) {
  const xArr = [];
  const yArr = [];
  for (let y = 0; y < wallpaper.length; y++) {
    for (let x = 0; x < wallpaper[0].length; x++) {
      if (wallpaper[y][x] === "#") {
        xArr.push(x);
        yArr.push(y);
      }
    }
  }
  return [
    Math.min(...yArr),
    Math.min(...xArr),
    Math.max(...yArr) + 1,
    Math.max(...xArr) + 1,
  ];
}
