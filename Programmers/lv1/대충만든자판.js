function solution(keymap, targets) {
  const ans = [];
  const map = {};
  for (let i = 65; i < 91; i++) {
    const alp = String.fromCharCode(i);
    map[alp] = Math.min(
      ...keymap.map((str) =>
        str.indexOf(alp) < 0 ? Infinity : str.indexOf(alp) + 1
      )
    );
  }

  for (let target of targets) {
    let sum = 0;
    for (let str of target) {
      if (map[str] === Infinity) {
        sum = -1;
        break;
      }
      sum += map[str];
    }
    ans.push(sum);
  }
  return ans;
}

function solution(n, relation, dirname) {
  const arr = Array(N + 1).fill(0);

  arr[1] = 4;
  dirname = dirname.map((el) => el.length);

  for (let [p, c] of relation) {
    arr[c] = arr[p] + dirname[c - 1] + 1;
  }
  return Math.max(...arr);
}
