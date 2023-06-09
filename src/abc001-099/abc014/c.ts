export default {};

function solve() {
  const n = nextN();

  const array = [];
  for (let i = 0; i <= 1000001; i++) {
    array.push(0);
  }

  for (let i = 0; i < n; i++) {
    const [a, b] = [nextN(), nextN()];
    array[a] += 1;
    array[b + 1] -= 1;
  }

  let now = 0;
  let max = 0;
  for (let i = 0; i <= 1000000; i++) {
    now += array[i];
    max = Math.max(max, now);
  }

  console.log(max);
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
