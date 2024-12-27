const input = ["mirkovC4nizCC44", "C4"];

// const input = ["12ab112ab2ab", "12ab"];
let [string, bomb] = input;

const stack = [];
for (let str of string) {
  stack.push(str);

  if (stack.join("").includes(bomb)) {
    for (let i in bomb) {
      stack.pop();
    }
  }
}
console.log(stack.length > 0 ? stack.join("") : "FRULA");
