const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  class Heap {
    heapArray = [];
    constructor() {
      this.heapArray.push(null);
    }

    push(data) {
      if (this.heapArray === null) {
        this.heapArray = [];
        this.heapArray.push(null);
        this.heapArray.push(data);
      } else {
        this.heapArray.push(data);
        let inserted_idx = this.heapArray.length - 1;
        let parent_idx = parseInt(inserted_idx / 2);
        while (inserted_idx > 1) {
          if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
            const tmp = this.heapArray[inserted_idx];
            this.heapArray[inserted_idx] = this.heapArray[parent_idx];
            this.heapArray[parent_idx] = tmp;
            inserted_idx = parent_idx;
            parent_idx = parseInt(parent_idx / 2);
          } else {
            break;
          }
        }
      }
    }
    move_down(pop_idx) {
      const left_child = pop_idx * 2;
      const right_child = pop_idx * 2 + 1;

      if (left_child >= this.heapArray.length) {
        return false;
      } else if (right_child >= this.heapArray.length) {
        if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
          return true;
        }
        return false;
      } else {
        if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
          if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
            return true;
          }
          return false;
        } else {
          if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
            return true;
          }
          return false;
        }
      }
    }

    pop() {
      if (this.heapArray === null) {
        return null;
      } else {
        const return_data = this.heapArray[1];
        this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
        this.heapArray.pop();
        let popped_idx = 1;
        while (this.move_down(popped_idx)) {
          const left_child = popped_idx * 2;
          const right_child = popped_idx * 2 + 1;
          if (right_child >= this.heapArray.length) {
            if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[left_child];
              this.heapArray[left_child] = tmp;
              popped_idx = left_child;
            }
          } else {
            if (
              this.heapArray[left_child][1] < this.heapArray[right_child][1]
            ) {
              if (
                this.heapArray[popped_idx][1] > this.heapArray[left_child][1]
              ) {
                const tmp = this.heapArray[popped_idx];
                this.heapArray[popped_idx] = this.heapArray[left_child];
                this.heapArray[left_child] = tmp;
                popped_idx = left_child;
              }
            } else {
              if (
                this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
              ) {
                const tmp = this.heapArray[popped_idx];
                this.heapArray[popped_idx] = this.heapArray[right_child];
                this.heapArray[right_child] = tmp;
                popped_idx = right_child;
              }
            }
          }
        }
        return return_data;
      }
    }
  }

  const [n, m] = input.shift();
  const [start] = input.shift();
  const routes = input;

  const check = Array(n + 1).fill(false);
  const costs = Array(n + 1).fill(Infinity);
  const graph = {};
  for (let [s, e, c] of routes) {
    if (!graph[s]) graph[s] = [];
    graph[s].push([e, c]);
  }

  const queue = new Heap();
  queue.push([start, 0]);
  check[start] = true;
  costs[start] = 0;

  while (queue.heapArray.length > 1) {
    const [cur, dist] = queue.pop();

    if (!graph[cur]) continue;

    for (let [next, cost] of graph[cur]) {
      if (!check[next] && costs[next] > costs[cur] + cost) {
        costs[next] = costs[cur] + cost;
        queue.push([next, costs[next]]);
      }
    }
    check[cur] = true;
  }
  costs.shift();
  console.log(costs.map((el) => (el === Infinity ? "INF" : el)).join("\n"));
  process.exit(0);
});
