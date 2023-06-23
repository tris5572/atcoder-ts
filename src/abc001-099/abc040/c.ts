export default {};

function solve() {
  const n = nextN();
  const a = nextNI(n);
  const memo = new Array(n).fill(0);

  memo[0] = 0;
  memo[1] = Math.abs(a[0] - a[1]);

  for (let i = 2; i < n; i++) {
    const x = memo[i - 1] + Math.abs(a[i - 1] - a[i]);
    const y = memo[i - 2] + Math.abs(a[i - 2] - a[i]);
    memo[i] = Math.min(x, y);
  }

  console.log(memo[n - 1]);
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
