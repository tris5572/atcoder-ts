export default {};

function solve() {
  const n = nextN();
  const ng = [nextN(), nextN(), nextN()];

  let num = n;
  let count = 0;
  let flag = false;

  while (count < 100) {
    if (ng.includes(n)) {
      break;
    }

    if (num === 3 || num === 2 || num === 1) {
      flag = true;
      break;
    }

    if (ng.includes(num - 3)) {
      if (ng.includes(num - 2)) {
        if (ng.includes(num - 1)) {
          break;
        }
      } else {
        num -= 2;
      }
    } else {
      num -= 3;
    }

    count++;
  }

  console.log(flag ? "YES" : "NO");
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
