export default {};

function solve() {
  const n = nextN();
  const q = nextN();

  const a = new Array(n + 2).fill(0);

  for (let i = 0; i < q; i++) {
    const l = nextN();
    const r = nextN();
    a[l]++;
    a[r + 1]++;
  }

  for (let i = 1; i < a.length; i++) {
    a[i] += a[i - 1];
  }

  for (let i = 1; i <= n; i++) {
    process.stdout.write(`${a[i] % 2}`);
  }

  console.log("");
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
