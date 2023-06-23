export default {};

function solve() {
  const n = nextN();

  const a = [];

  for (let i = 0; i < n; i++) {
    const s = nextS();
    a.push(s.split(""));
  }

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; 0 <= j; j--) {
      process.stdout.write(a[j][i]);
    }
    console.log("");
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
