export default {};

function solve() {
  const n = num();
  const k = num();
  const data = [];

  for (let i = 0; i < n; i++) {
    data.push(num());
  }

  let max = -9999999999;

  // 左から l 個、右から r 個取り、捨てる操作 z を最大で k-(l+r) 回行える。
  for (let l = 0; l <= k; l++) {
    for (let r = 0; r <= k; r++) {
      const hand: number[] = [];
      hand.push(...data.slice(0, l));
      hand.push(...data.slice(n - r));
      const sorted = hand.sort((a, b) => a - b);
      for (let z = 0; z <= k; z++) {
        if (k < l + r + z) {
          continue;
        }
        if (n < l + r) {
          continue;
        }
        const total = sorted.slice(z).reduce((a, b) => a + b, 0);
        max = Math.max(max, total);
      }
    }
  }

  pr(max);
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function pr(...v: any) {
  console.log(...v);
}
function wr(s: any) {
  process.stdout.write(String(s));
}
function epr(...v: any) {
  console.error(...v);
}

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

function str(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function num(): number {
  return Number(str());
}
