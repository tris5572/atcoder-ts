export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  let count = 0;

  // Sを最大限消費する
  const v1 = Math.min(n, Math.trunc(m / 2));
  count += v1;

  // cだけで作る
  const c = m - v1 * 2;
  const v2 = Math.trunc(c / 4);
  count += v2;

  console.log(count);
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
