export default {};

function solve() {
  const s1 = nextN();
  const e1 = nextN();
  const s2 = nextN();
  const e2 = nextN();
  const s3 = nextN();
  const e3 = nextN();

  const v = (s1 * e1) / 10 + (s2 * e2) / 10 + (s3 * e3) / 10;

  console.log(v);
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
