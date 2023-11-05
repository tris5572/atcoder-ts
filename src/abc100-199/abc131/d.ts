export default {};

function solve() {
  const data: [number, number][] = [];
  const n = num();
  for (let i = 0; i < n; i++) {
    data.push([num(), num()]);
  }

  data.sort((a, b) => a[1] - b[1]);

  let total = 0;
  let flag = true;

  for (const v of data) {
    total += v[0];
    if (v[1] < total) {
      flag = false;
      break;
    }
  }

  if (flag) {
    pr("Yes");
  } else {
    pr("No");
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
