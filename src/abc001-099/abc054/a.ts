export default {};

function solve() {
  let a = nextN();
  let b = nextN();
  let ans = "Alice";

  if (a === 1) {
    a = 14;
  }
  if (b === 1) {
    b = 14;
  }

  if (a < b) {
    ans = "Bob";
  } else if (a === b) {
    ans = "Draw";
  }

  console.log(ans);
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
