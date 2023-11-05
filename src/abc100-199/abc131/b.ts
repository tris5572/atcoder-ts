export default {};

function solve() {
  const n = num();
  const l = num();

  let total = 0;
  let minv = 99999;

  for (let i = 0; i < n; i++) {
    const t = l + i;
    total += t;
    if (Math.abs(t) < Math.abs(minv)) {
      minv = t;
    }
  }

  pr(total - minv);
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
