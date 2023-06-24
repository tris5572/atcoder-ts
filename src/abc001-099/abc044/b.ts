export default {};

function solve() {
  const s = nextS();

  let flag = true;
  for (const c of "abcdefghijklmnopqrstuvwxyz") {
    const x = (s.match(new RegExp(c, "g")) || []).length;
    if (x % 2 === 1) {
      flag = false;
      break;
    }
  }

  console.log(flag ? "Yes" : "No");
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
