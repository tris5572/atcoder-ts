export default {};

function solve() {
  const x = nextS();

  let flag = true;
  let s = 0;

  while (s < x.length) {
    if (x.length === 0) {
      return;
    }

    const c = x.substring(s, s + 1);
    if (x.substring(s, s + 2) === "ch") {
      s += 2;
    } else if (c === "o" || c === "k" || c === "u") {
      s += 1;
    } else {
      flag = false;
      break;
    }
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
