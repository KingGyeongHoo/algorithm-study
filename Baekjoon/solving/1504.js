// const input = [
//   [4, 6],
//   [1, 2, 3],
//   [2, 3, 3],
//   [3, 4, 1],
//   [1, 3, 5],
//   [2, 4, 5],
//   [1, 4, 4],
//   [2, 3],
// ];

// const [n, m] = input.shift();
// const [n1, n2] = input.pop();

// if (
//   !input.some(
//     (el) => (el[0] === n1 && el[1] === n2) || (el[0] === n2 && el[1] === n1)
//   )
// ) {
//   console.log(-1);
//   return;
// }

// const graph = Array.from({ length: n + 1 }, () => []);
// for (let [s, e, c] of input) {
//   graph[s].push([e, c]);
//   graph[e].push([s, c]);
// }
// const bfs = (start, t1, t2, end) => {
//   let check = Array(n + 1).fill(false);
//   let min = Infinity;
//   check[start] = true;

//   const queue = [[start, 0]];
//   while (queue.length > 0) {
//     const [cur, cost] = queue.shift();

//     if (cur === target) {
//       min = Math.min(min, cost);
//     }
//     if (!graph[cur]) continue;

//     for (let [next, nextCost] of graph[cur]) {
//       if (!check[next]) {
//         check[next] = true;
//         queue.push([next, cost + nextCost]);
//       }
//     }
//   }
//   return min;
// };

// console.log(
//   Math.min(bfs(1, n1) + bfs(n2, n), bfs(1, n2) + bfs(n1, n)) + bfs(n1, n2)
// );

let leftHand = 7;
let rightHand = 12;
let num = 11;
const leftDis =
  Math.abs(Math.ceil(leftHand / 3) - Math.ceil(num / 3)) +
  Math.abs((leftHand % 3) - (num % 3));
const rightDis =
  Math.abs(Math.ceil(rightHand / 3) - Math.ceil(num / 3)) +
  Math.abs((rightHand % 3) - (num % 3));

console.log(3 - Math.abs((leftHand % 3) - (num % 3)));
console.log(3 - Math.abs((rightHand % 3) - (num % 3)));
