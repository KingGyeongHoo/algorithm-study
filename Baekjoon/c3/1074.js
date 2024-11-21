const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  let [N, r, c] = input.shift();

  //탐색을 진행하는 단위 (현재 한 사분면의 크기))
  let n = 2 ** (N - 1);
  let start = [n, n];
  //사분면을 구하는 함수
  //행, 열을 넣음
  const getLocation = (y, x) => {
    let [sy, sx] = start;
    //현재 열과 행을 시작점과 비교
    const isYPlus = y < sy ? true : false;
    const isXPlus = x >= sx ? true : false;

    if (isYPlus && !isXPlus) {
      start = [sy - n / 2, sx - n / 2];
      return 0;
    } else if (isYPlus && isXPlus) {
      start = [sy - n / 2, sx + n / 2];
      return 1;
    } else if (!isYPlus && !isXPlus) {
      start = [sy + n / 2, sx - n / 2];
      return 2;
    } else if (!isYPlus && isXPlus) {
      start = [sy + n / 2, sx + n / 2];
      return 3;
    }
  };

  //각 사분면의 시작점
  let root = 0;
  while (n >= 1) {
    //시작점의 값은 2의 (2N - 2) 제곱 * 사분면
    root += 2 ** (2 * N - 2) * getLocation(r, c);

    //탐색하는 행과 열의 개수를 줄임
    n /= 2;
    N--;
  }
  console.log(root);

  process.exit(0);
});
