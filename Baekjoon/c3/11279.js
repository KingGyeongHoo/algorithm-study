const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const n = input.shift();

  class Heap {
    constructor() {
      this.heap = [];
    }

    swap(curIdx, parentIdx) {
      let temp = this.heap[curIdx];
      this.heap[curIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;
    }

    push(item) {
      this.heap.push(item);
      let idx = this.heap.length - 1;
      let parentIdx = Math.floor((idx - 1) / 2);

      while (this.heap[idx] > this.heap[parentIdx]) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      }
    }

    pop() {
      if (this.heap.length === 0) return 0;
      if (this.heap.length === 1) return this.heap.pop();
      let idx = 0;
      let leftChild = Math.floor(idx * 2 + 1);
      let rightChild = leftChild + 1;

      let childIdx = leftChild;
      if (this.heap[rightChild] > this.heap[leftChild]) {
        childIdx = rightChild;
      }
      const firstItem = this.heap[0];

      this.heap[0] = this.heap.pop();

      while (this.heap[childIdx] > this.heap[idx]) {
        this.swap(childIdx, idx);
        idx = childIdx;
        let nextLeftChild = Math.floor(idx * 2 + 1);
        let nextRightChild = nextLeftChild + 1;
        let nextChildIdx = nextLeftChild;

        if (this.heap[nextRightChild] > this.heap[nextLeftChild]) {
          nextChildIdx = nextRightChild;
        }
        childIdx = nextChildIdx;
      }

      return firstItem;
    }

    getHeap() {
      return this.heap;
    }
  }

  const ans = [];
  const heap = new Heap();

  for (c of input) {
    if (c === 0) {
      ans.push(heap.pop());
    } else {
      heap.push(c);
    }
  }

  console.log(ans.join("\n"));

  process.exit(0);
});
