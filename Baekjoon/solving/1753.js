const input = [
  [5, 6],
  [1],
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 6],
];
// const input = [
//   [6, 7],
//   [1],
//   [5, 1, 1],
//   [1, 2, 1],
//   [1, 3, 4],
//   [2, 6, 1],
//   [6, 3, 1],
//   [2, 4, 6],
//   [3, 4, 1],
// ];

// class Heap {
//   constructor() {
//     this.heap = [];
//   }

//   swap(curIdx, parentIdx) {
//     let temp = this.heap[curIdx];
//     this.heap[curIdx] = this.heap[parentIdx];
//     this.heap[parentIdx] = temp;
//   }

//   push(item) {
//     this.heap.push(item);
//     let idx = this.heap.length - 1;
//     let parentIdx = Math.floor((idx - 1) / 2);

//     while (this.heap[idx] < this.heap[parentIdx]) {
//       this.swap(idx, parentIdx);
//       idx = parentIdx;
//       parentIdx = Math.floor((idx - 1) / 2);
//     }
//   }

//   pop() {
//     if (this.heap.length === 0) return 0;
//     if (this.heap.length === 1) return this.heap.pop();
//     let idx = 0;
//     let leftChild = Math.floor(idx * 2 + 1);
//     let rightChild = leftChild + 1;

//     let childIdx = leftChild;
//     if (this.heap[rightChild] < this.heap[leftChild]) {
//       childIdx = rightChild;
//     }
//     const firstItem = this.heap[0];

//     this.heap[0] = this.heap.pop();

//     while (this.heap[childIdx] < this.heap[idx]) {
//       this.swap(childIdx, idx);
//       idx = childIdx;
//       let nextLeftChild = Math.floor(idx * 2 + 1);
//       let nextRightChild = nextLeftChild + 1;
//       let nextChildIdx = nextLeftChild;

//       if (this.heap[nextRightChild] < this.heap[nextLeftChild]) {
//         nextChildIdx = nextRightChild;
//       }
//       childIdx = nextChildIdx;
//     }

//     return firstItem;
//   }

//   getHeap() {
//     return this.heap;
//   }
// }

const [n, m] = input.shift();
const start = input.shift();
const routes = input;

const graph = Array.from({ length: n + 1 }, () => []);
for (let [s, e, c] of routes) {
  graph[s].push([e, c]);
}

const length = Array(n + 1).fill(Infinity);
length[start] = 0;
const check = Array(n + 1).fill(false);

const queue = [[start, 0]];

let idx = 0;
while (queue.length > idx) {
  const [cur, curLen] = queue[idx++];
  if (check[cur]) {
    continue;
  }

  check[cur] = true;
  for (let [next, nextLen] of graph[cur]) {
    if (curLen + nextLen < length[next]) {
      length[next] = curLen + nextLen;
      queue.push([next, curLen + nextLen]);
    }
  }
}
console.log(
  length
    .slice(1)
    .map((el) => (el === Infinity ? "INF" : el))
    .join("\n")
);
