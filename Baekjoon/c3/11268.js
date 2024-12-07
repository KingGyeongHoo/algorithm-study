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

  class AbsHeap {
    constructor() {
      this.heap = [];
    }

    swap(curItem, nextItem) {
      let temp = this.heap[curItem];
      this.heap[curItem] = this.heap[nextItem];
      this.heap[nextItem] = temp;
    }

    push(item) {
      this.heap.push(item);

      let curIdx = this.heap.length - 1;
      let parentIdx = Math.floor((curIdx - 1) / 2);
      while (Math.abs(this.heap[curIdx]) <= Math.abs(this.heap[parentIdx])) {
        if (Math.abs(this.heap[curIdx]) === Math.abs(this.heap[parentIdx])) {
          if (this.heap[curIdx] < this.heap[parentIdx])
            this.swap(curIdx, parentIdx);
        } else {
          this.swap(curIdx, parentIdx);
        }
        curIdx = parentIdx;
        parentIdx = Math.floor((curIdx - 1) / 2);
      }
    }

    pop() {
      if (this.heap.length === 0) return 0;
      if (this.heap.length === 1) return this.heap.pop();
      let curIdx = 0;
      let leftIdx = curIdx * 2 + 1;
      let rightIdx = curIdx * 2 + 2;

      let childIdx = leftIdx;
      if (Math.abs(this.heap[leftIdx]) >= Math.abs(this.heap[rightIdx])) {
        if (Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[rightIdx])) {
          if (this.heap[leftIdx] > this.heap[rightIdx]) childIdx = rightIdx;
        } else {
          childIdx = rightIdx;
        }
      }
      const firsItem = this.heap[0];
      this.heap[0] = this.heap.pop();

      while (Math.abs(this.heap[curIdx]) >= Math.abs(this.heap[childIdx])) {
        if (Math.abs(this.heap[curIdx]) === Math.abs(this.heap[childIdx])) {
          if (this.heap[curIdx] > this.heap[childIdx])
            this.swap(curIdx, childIdx);
        } else {
          this.swap(curIdx, childIdx);
        }
        curIdx = childIdx;

        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
        childIdx = leftIdx;

        if (Math.abs(this.heap[leftIdx]) >= Math.abs(this.heap[rightIdx])) {
          if (Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[rightIdx])) {
            if (this.heap[leftIdx] > this.heap[rightIdx]) childIdx = rightIdx;
          } else {
            childIdx = rightIdx;
          }
        }
      }
      return firsItem;
    }

    getHeap() {
      return this.heap;
    }
  }

  const ans = [];
  const absHeap = new AbsHeap();
  for (let c of input) {
    if (c !== 0) absHeap.push(c);
    else {
      ans.push(absHeap.pop());
    }
  }
  console.log(ans.join("\n"));
  process.exit(0);
});
