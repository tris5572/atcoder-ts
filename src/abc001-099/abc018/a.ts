export default {};

function solve() {
  const a = [nextN(), nextN(), nextN()];
  const s = [1, 1, 1];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (a[i] < a[j]) {
        s[i]++;
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
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
