export default {};

function solve() {
  const n = nextN();
  const k = nextN();
  const a = nextNI(n);

  let sum = BigInt(a.slice(0, k).reduce((acc, v) => acc + v));
  let total = BigInt(sum);

  for (let i = 1; i < n - k + 1; i++) {
    sum -= BigInt(a[i - 1]);
    sum += BigInt(a[i + k - 1]);
    total += sum;
  }

  console.log(total.toString());
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
