export default {};

function solve() {
  const n = nextN();
  const array = [];

  for (let i = 0; i < n; i++) {
    array.push(nextS());
  }

  const m: { [key: string]: number } = {};
  let maxV = 0;
  let maxS = "";

  for (const v of array) {
    if (m[v] == null) {
      m[v] = 1;
    } else {
      m[v]++;
    }
    if (maxV < m[v]) {
      maxV = m[v];
      maxS = v;
    }
  }

  console.log(maxS);
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
