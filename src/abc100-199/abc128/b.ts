export default {};

function solve() {
  const n = num();

  const data = [];

  for (let i = 1; i <= n; i++) {
    const [s, p] = [str(), num()];
    data.push({ n: i, city: s, point: p });
  }

  data.sort((a, b) => {
    if (a.city < b.city) {
      return -1;
    }
    if (b.city < a.city) {
      return 1;
    }
    return b.point - a.point;
  });

  for (const v of data) {
    pr(v.n);
  }
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
