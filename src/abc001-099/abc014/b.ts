export default {};

function solve() {
  const n = nextN();
  const x = nextN();
  const a = nextNN(n);

  let total = 0;
  for (let i = 0; 1 << i <= x; i++) {
    if (((1 << i) & x) !== 0) {
      total += a[i];
    }
  }

  console.log(total);
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
