let [N, r, c] = [2, 0, 2];

let n = 2 ** (N - 1);
const getLocation = (r, c) => {
  const isYPlus = r < n ? true : false;
  const isXPlus = c >= n ? true : false;

  console.log(r, c, n);

  if (isYPlus && !isXPlus) {
    return 0;
  } else if (isYPlus && isXPlus) {
    return 1;
  } else if (!isYPlus && !isXPlus) {
    return 2;
  } else if (!isYPlus && isXPlus) {
    return 3;
  }
};

let root = 0;
while (n >= 1) {
  root += 2 ** (2 * N - 2) * getLocation(r, c);
  console.log(2 ** (2 * N - 2) * getLocation(r, c));
  console.log(root);
  n /= 2;
  N--;
}
console.log(root);
