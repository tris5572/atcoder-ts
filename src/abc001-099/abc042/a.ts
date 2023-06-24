export default {};

function solve() {
  const a = [nextN(), nextN(), nextN()];
  let five = 0;
  let seven = 0;

  for (const v of a) {
    if (v === 5) {
      five++;
    } else if (v === 7) {
      seven++;
    }
  }

  console.log(five === 2 && seven === 1 ? "YES" : "NO");
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
