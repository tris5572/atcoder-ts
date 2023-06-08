export default {};

function solve() {
  const n = nextN();
  const array = nextNN(n);
  let p1 = 0;
  let p2 = 0;

  for (const v of array) {
    if (p1 === v) {
      continue;
    } else if (p1 < v) {
      p2 = p1;
      p1 = v;
    } else if (p2 < v) {
      p2 = v;
    }
  }

  console.log(p2);
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
