// let [a, b, c] = [2147483647, 2147483647, 214748364];
// let [a, b, c] = [10, 11, 12];
let [a, b, c] = [10, 1000, 7];

const check = {};
const rem = [];
let num = 1;
for (let i = 0; i < b; i++) {
  num *= a;
  num %= c;
  if (check[num]) {
    break;
  } else {
    check[num] = true;
    rem.push(num);
  }
}
console.log(rem);
console.log(rem[b % rem.length]);
