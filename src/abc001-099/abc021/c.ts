export default {};

function solve() {
  const n = nextN();
  const a = nextN();
  const b = nextN();
  const m = nextN();

  const data: number[][] = [];
  const cost: number[] = [];
  const queue: number[] = [];
  for (let i = 0; i <= n; i++) {
    data.push([]);
    cost.push(99999999);
  }
  cost[a] = 0;
  queue.push(a);

  for (let i = 0; i < m; i++) {
    const x = nextN();
    const y = nextN();
    data[x].push(y);
    data[y].push(x);
  }

  // 全地点までのコストを幅優先で計算
  while (queue.length !== 0) {
    const q = queue.shift()!;
    for (let i = 0; i < data[q].length; i++) {
      const d = data[q][i];
      const c = Math.min(cost[d], cost[q] + 1);
      if (c !== cost[d]) {
        cost[d] = c;
        if (!queue.includes(d)) {
          queue.push(d);
        }
      }
    }
  }

  // 最短経路のグラフを作成
  const graph: number[][] = [];
  for (let i = 0; i <= n; i++) {
    graph.push([]);
    for (let j = 0; j < data[i].length; j++) {
      if (cost[data[i][j]] === cost[i] + 1) {
        graph[i].push(data[i][j]);
      }
    }
  }

  // 経路を数え上げる
  const memo: number[] = new Array(n + 1).fill(-1);
  function calc(z: number): number {
    // ゴールに到達したとき
    if (z === b) {
      return 1;
    }
    // 行き止まりの場所のとき
    if (graph[z].length === 0) {
      return 0;
    }
    // メモされた値があるとき
    if (0 <= memo[z]) {
      return memo[z];
    }

    let count = 0;
    for (let i = 0; i < graph[z].length; i++) {
      count += calc(graph[z][i]);
    }
    memo[z] = count;

    return count;
  }

  console.log(calc(a) % 1000000007);
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// input
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
process.stdin.setEncoding("utf8");
const __inputValues: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
});
let __inputIndex = 0;

reader.on("line", (line: string) => {
  __inputValues.push(...line.trim().split(" "));
});
reader.on("close", () => {
  solve();
});

function nextS(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function nextN(): number {
  return Number(nextS());
}
