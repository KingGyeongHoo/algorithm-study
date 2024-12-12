const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const [n] = input.shift();

  const graph = {};
  for (let route of input) {
    const [start, ...routes] = route;
    graph[start] = [];
    for (end of routes) {
      graph[start].push(end);
    }
  }

  const preorder = ["A"];
  const preorderT = (cur) => {
    if (!graph[cur]) return;

    for (let next of graph[cur]) {
      if (next !== ".") {
        preorder.push(next);
        preorderT(next);
      }
    }
  };
  preorderT("A");

  let inorder = ["A"];
  const inorderT = (start) => {
    const queue = [start];

    while (queue.length > 0) {
      const cur = queue.shift();
      if (!graph[cur]) continue;

      for (let i = 0; i < 2; i++) {
        const next = graph[cur][i];
        const idx = inorder.indexOf(cur);

        if (next !== ".") {
          if (i === 0) {
            inorder = [...inorder.slice(0, idx), next, ...inorder.slice(idx)];
          } else {
            inorder = [
              ...inorder.slice(0, idx + 1),
              next,
              ...inorder.slice(idx + 1),
            ];
          }
          queue.push(next);
        }
      }
    }
  };
  inorderT("A");

  const postorder = ["A"];
  const postorderT = (cur) => {
    if (!graph[cur]) return;

    for (let i = 1; i >= 0; i--) {
      const next = graph[cur][i];
      if (next !== ".") {
        postorder.unshift(next);
        postorderT(next);
      }
    }
  };
  postorderT("A");
  const ans = [preorder.join(""), inorder.join(""), postorder.join("")];
  console.log(ans.join("\n"));
  process.exit(0);
});
