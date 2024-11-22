const input = [
  [3],
  [1, 0],
  [5],
  [4, 2],
  [1, 2, 3, 4],
  [6, 0],
  [1, 1, 9, 1, 1, 1],
];

const [N] = input.shift();
for (let i = 0; i < N * 2; i += 2) {
  let [n, t] = input[i];
  const queue = input[i + 1];

  const order = queue.map((el, idx) => [idx, el]);

  let pop = [-10, -10];
  let imp = Math.max(...queue);
  let o = 0;
  while (pop[0] !== t) {
    const [curN, curI] = order.shift();
    if (curI === imp) {
      pop = [curN, curI];
      imp = Math.max(...order.map((e) => e[1]));
      o++;
    } else {
      order.push([curN, curI]);
    }
  }
  console.log(o);
}
