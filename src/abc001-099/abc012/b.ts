export default {};

function solve() {
  const n = nextN();

  const s = n % 60;
  const m = Math.floor((n / 60) % 60);
  const h = Math.floor(n / 3600);

  const ss = String(s).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const hh = String(h).padStart(2, "0");
  console.log(`${hh}:${mm}:${ss}`);
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
