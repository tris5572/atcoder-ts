export default {};

function solve() {
  const n = nextN();
  const s = nextS();
  let count = 0;
  let acc = "b";
  let flag = false;

  while (true) {
    if (acc === s) {
      flag = true;
      break;
    }
    count++;
    switch (count % 3) {
      case 1:
        acc = `a${acc}c`;
        break;
      case 2:
        acc = `c${acc}a`;
        break;
      case 0:
        acc = `b${acc}b`;
        break;
    }
    if (s.length < acc.length) {
      break;
    }
  }

  console.log(flag ? count : -1);
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
