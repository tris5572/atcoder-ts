export default {};

function solve() {
  const n = nextN();
  const q = nextN();
  const a = new Array(n).fill(0);

  for (let i = 0; i < q; i++) {
    const l = nextN();
    const r = nextN();
    const t = nextN();
    for (let j = l; j <= r; j++) {
      a[j - 1] = t;
    }
  }

  for (const v of a) {
    console.log(v);
  }
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
