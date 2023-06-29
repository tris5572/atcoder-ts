export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  const a = [];
  const c = [];

  for (let i = 0; i < n; i++) {
    a.push([nextN(), nextN()]);
  }
  for (let i = 0; i < m; i++) {
    c.push([nextN(), nextN()]);
  }

  for (let i = 0; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let minI = 0;
    for (let j = 0; j < m; j++) {
      const d = Math.abs(a[i][0] - c[j][0]) + Math.abs(a[i][1] - c[j][1]);
      if (d < min) {
        min = d;
        minI = j + 1;
      }
    }
    console.log(minI);
  }
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
