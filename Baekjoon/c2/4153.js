const input = [
  [6, 8, 10],
  [25, 52, 60],
  [5, 12, 13],
  [0, 0, 0],
];

for (let i = 0; i < input.length - 1; i++) {
  input[i].sort((a, b) => b - a);
  if (input[i][0] ** 2 === input[i][1] ** 2 + input[i][2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
