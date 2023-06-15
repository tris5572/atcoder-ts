export default {};

function solve() {
  const n = nextN();
  const a = nextNN(n);
  let area = 0;

  sortNumberR(a);

  for (let i = 0; i < n; i++) {
    const r = a[i];
    const ar = Math.PI * r * r;
    if (i % 2 == 0) {
      area += ar;
    } else {
      area -= ar;
    }
  }

  console.log(area);
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

function nextNN(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}

function sortNumberR(array: number[]) {
  array.sort((a, b) => b - a);
}
