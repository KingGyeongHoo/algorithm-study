let [n, k] = "2 9".split(" ");

let str = "";

const getSum = (n, k) => {
  for (let i = 1; i < 10; i++) {
    str += n;
    if (Number(str) % Number(k) === 0) {
      return i;
    }
  }
  return -1;
};

console.log(getSum(n, k));
