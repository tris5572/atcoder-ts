export default {};

function solve() {
  const a = nextN();
  const b = nextN();
  const c = nextN();

  if (a + b === c) {
    if (a - b === c) {
      console.log("?");
    } else {
      console.log("+");
    }
  } else if (a - b === c) {
    console.log("-");
  } else {
    console.log("!");
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
