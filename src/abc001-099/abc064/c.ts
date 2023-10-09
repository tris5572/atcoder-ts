export default {};

function solve() {
  const n = nextN();
  const data = new Array(9).fill(0);

  for (let i = 0; i < n; i++) {
    const a = nextN();
    const b = Math.trunc(a / 400);
    const x = 9 <= b ? 8 : b;
    data[x]++;
  }

  let count = 0;
  for (let i = 0; i < 8; i++) {
    if (data[i] !== 0) {
      count++;
    }
  }

  let countMax = count;
  const z = data[8];
  if (z !== 0) {
    if (count === 0) {
      count = 1;
    }
    countMax = countMax + z;
  }

  pr(count, countMax);
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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

function nextS(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function nextN(): number {
  return Number(nextS());
}
