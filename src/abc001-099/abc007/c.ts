export default {};

function solve() {
  const r = nextN();
  const c = nextN();
  const sy = nextN();
  const sx = nextN();
  const gy = nextN();
  const gx = nextN();

  const road: boolean[][] = [];
  const cost: number[][] = [];
  // 配列をキューとして使うと shift() が特に遅いが、この問題程度なら大丈夫。
  const queue: [number, number][] = [[sy - 1, sx - 1]];

  for (let i = 0; i < r; i++) {
    const line = nextS();
    const buf = [];
    for (const c of line) {
      if (c === ".") {
        buf.push(true);
      } else {
        buf.push(false);
      }
    }
    road.push(buf);
  }

  for (let i = 0; i < r; i++) {
    const buf = [];
    for (let j = 0; j < c; j++) {
      buf.push(99999);
    }
    cost.push(buf);
  }
  cost[sy - 1][sx - 1] = 0;

  const d1 = [0, 1, 0, -1];
  const d2 = [1, 0, -1, 0];

  while (true) {
    const q = queue.shift();
    if (q === undefined) {
      break;
    }
    for (let i = 0; i < 4; i++) {
      const y = q[0] + d1[i];
      const x = q[1] + d2[i];
      if (0 <= y && y < r && 0 <= x && x < c && road[y][x]) {
        const m = Math.min(cost[q[0]][q[1]] + 1, cost[y][x]);
        if (cost[y][x] !== m) {
          cost[y][x] = m;
          queue.push([y, x]);
        }
      }
    }
  }

  console.log(cost[gy - 1][gx - 1]);
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

function nextNN(n: number): number[] {
  const array: number[] = [];

  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}
