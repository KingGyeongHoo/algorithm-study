const input = [9, 0, 12345678, 1, 2, 0, 0, 0, 0, 32];
const n = input.shift();

const minHeap = [];
const ans = [];

const insertHeap = (number) => {
  minHeap.push(number);
  let itemIdx = minHeap.length - 1;
  let parentIdx = Math.floor(itemIdx - 1 / 2);

  while (minHeap[parentIdx] && minHeap[itemIdx] < minHeap[parentIdx]) {
    let temp = minHeap[parentIdx];
    minHeap[parentIdx] = minHeap[itemIdx];
    minHeap[itemIdx] = temp;

    itemIdx = parentIdx;
    parentIdx = Math.floor(itemIdx - 1 / 2);
  }
};

const deleteHeap = () => {
  const deletedItem = minHeap.shift();
  if (!deletedItem) {
    ans.push(0);
    return;
  }
  ans.push(deletedItem);
  minHeap.unshift(minHeap.pop());

  let itemIdx = 0;
  let childIdx = itemIdx * 2 + 1;

  while (minHeap[childIdx] && minHeap[itemIdx] > minHeap[childIdx]) {
    let temp = minHeap[childIdx];
    minHeap[childIdx] = minHeap[itemIdx];
    minHeap[itemIdx] = temp;

    itemIdx = childIdx;
    childIdx = itemIdx * 2 + 1;
  }
};

for (c of input) {
  if (c === 0) {
    deleteHeap();
  } else {
    insertHeap(c);
  }
}
console.log(ans.join("\n"));
