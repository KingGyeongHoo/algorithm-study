function solution(gems) {
  const kinds = new Set(gems).size;
  const map = new Map();
  let ans = [1, gems.length];

  for (let end = 0; end < gems.length; end++) {
    const cur = gems[end];
    map.delete(cur);
    map.set(cur, end);

    if (map.size === kinds) {
      const curLen = [map.values().next().value + 1, end + 1];
      if (ans[1] - ans[0] > curLen[1] - curLen[0]) ans = curLen;
    }
  }
  return ans;
}
