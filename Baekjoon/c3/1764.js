const input = [
  "3 4",
  "ohhenrie",
  "charlie",
  "baesangwook",
  "obama",
  "baesangwook",
  "ohhenrie",
  "clinton",
];

const [n, m] = input.shift().split(" ").map(Number);
const obj = {};
for (let name of input.slice(0, n)) {
  if (!obj[name]) obj[name] = 0;
  obj[name] += 1;
}

for (let name of input.slice(n)) {
  if (!obj[name]) obj[name] = 0;
  obj[name] += 1;
}

const dbj = Object.entries(obj)
  .filter((el) => el[1] === 2)
  .map((el) => el[0])
  .sort();
console.log(dbj.length);
console.log(dbj.join("\n"));
