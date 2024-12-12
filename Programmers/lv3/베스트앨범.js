function solution(genres, plays) {
  const ans = [];
  const map = {};
  const gMap = {};
  for (let i in genres) {
    const g = genres[i];
    if (!gMap[g]) gMap[g] = 0;
    if (!map[i]) map[i] = [];
    gMap[g] += plays[i];
    map[i] = [g, plays[i]];
  }
  const gOrder = Object.entries(gMap)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);

  const entries = Object.entries(map);

  for (let g of gOrder) {
    const genrArr = entries
      .filter(([num, [gen, p]]) => gen === g)
      .sort((a, b) => b[1][1] - a[1][1] || Number(a[0]) - Number(b[0]))
      .slice(0, 2);

    genrArr.forEach((el) => ans.push(Number(el[0])));
  }

  return ans;
}
