export default {};

function solve() {
  const n = nextN();
  const a = nextN();
  const b = nextN();
  const data = nextNI(n);

  let cost = 0;

  // 右隣に徒歩かテレポートの楽な方で移動していくだけでOK
  for (let i = 1; i < n; i++) {
    const d = data[i] - data[i - 1];
    const min = Math.min(d * a, b);
    cost += min;
  }

  console.log(cost);
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

function nextNI(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}
