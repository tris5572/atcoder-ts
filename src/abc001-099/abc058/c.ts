export default {};

function solve() {
  const n = nextN();
  const s = [];
  for (let i = 0; i < n; i++) {
    s.push(nextS());
  }

  const data: { [keys: string]: number } = {};
  for (const c of "abcdefghijklmnopqrstuvwxyz") {
    data[c] = 0;
    let max = Number.MAX_SAFE_INTEGER;
    for (const v of s) {
      const x = (v.match(new RegExp(c, "g")) || []).length;
      max = Math.min(max, x);
    }
    data[c] = max;
  }

  for (const c of "abcdefghijklmnopqrstuvwxyz") {
    if (data[c] !== 0) {
      process.stdout.write(c.repeat(data[c]));
    }
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
