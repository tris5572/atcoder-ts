export default {};

function solve() {
  const n = nextN();
  const m = nextN();

  const time: number[][] = [];
  const queue: number[] = [];

  const pushQueue = (v: number) => {
    if (!queue.includes(v)) {
      queue.push(v);
    }
  };

  for (let i = 0; i <= n; i++) {
    time.push([]);
    for (let j = 0; j <= n; j++) {
      time[i].push(999999);
    }
  }

  for (let i = 0; i < m; i++) {
    const [a, b, t] = [nextN(), nextN(), nextN()];
    time[a][b] = t;
    time[b][a] = t;
    pushQueue(a);
    pushQueue(b);
  }

  // 幅優先探索で時間を更新する
  let q;
  while ((q = queue.shift()) != undefined) {
    for (let i = 0; i <= n; i++) {
      if (i === q) {
        continue;
      }
      for (let j = 0; j < n; j++) {
        if (j === q) {
          continue;
        }
        const min = Math.min(time[q][i] + time[i][j], time[q][j]);
        if (min !== time[q][j]) {
          time[q][j] = time[q][i] + time[i][j];
          time[j][q] = time[q][i] + time[i][j];
          pushQueue(q);
          pushQueue(j);
        }
      }
    }
  }

  // 各バス停において、他の全地点へ移動するときに最も時間を要するときの値を取得する
  const array = [999999];
  for (let i = 1; i <= n; i++) {
    let max = 0;
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        continue;
      }
      if (max < time[i][j]) {
        max = time[i][j];
      }
    }
    array.push(max);
  }

  // 全バス停へ移動する時間が最も短いバス停の値が回答
  console.log(Math.min(...array));
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
