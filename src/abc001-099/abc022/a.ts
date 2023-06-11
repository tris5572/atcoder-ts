export default {};

function solve() {
  const n = nextN();
  const s = nextN();
  const t = nextN();

  let w = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      w = nextN();
    } else {
      w += nextN();
    }
    if (s <= w && w <= t) {
      count++;
    }
  }
  console.log(count);
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
