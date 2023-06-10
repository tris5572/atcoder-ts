export default {};

function solve() {
  // 全スコアの合計から、区間スコアが最も低かったものを差し引く。

  const n = nextN();
  const m = nextN();

  const data: number[] = new Array(m + 2).fill(0);
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    const a = nextN();
    const b = nextN();
    const s = nextN();
    data[a] += s;
    data[b + 1] -= s;
    total += s;
  }

  for (let i = 1; i < m + 2; i++) {
    data[i] += data[i - 1];
  }

  for (let i = 1; i <= m; i++) {
    min = Math.min(min, data[i]);
  }

  console.log(total - min);
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
