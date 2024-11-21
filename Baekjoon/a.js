let input = 1000000;
for (let i = 1; i <= input; i++) {
  const sum =
    i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0) + i;
  if (sum === input) {
    console.log(i);
    return;
  }
}
console.log(0);
