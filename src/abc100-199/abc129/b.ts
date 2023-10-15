export default {};

function solve() {
  const n = num();
  const a = [];
  let min = 9999999999;

  for (let i = 0; i < n; i++) {
    a.push(num());
  }

  for (let i = 1; i < n; i++) {
    const l = a.slice(0, i).reduce((p, c) => p + c, 0);
    const r = a.slice(i).reduce((p, c) => p + c, 0);
    const d = Math.abs(l - r);
    min = Math.min(min, d);
  }

  pr(min);
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
