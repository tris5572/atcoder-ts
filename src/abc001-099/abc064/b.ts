export default {};

function solve() {
  const n = nextN();
  const a = nextNI(n);
  sortNumber(a);

  pr(a[a.length - 1] - a[0]);
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

function nextNI(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}

function sortNumber(array: number[]) {
  array.sort((a, b) => a - b);
}