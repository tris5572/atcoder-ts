export default {};

function solve() {
  let sa = nextS();
  let sb = nextS();
  let sc = nextS();
  let next = "a";

  while (true) {
    if (next === "a") {
      if (sa.length === 0) {
        console.log("A");
        break;
      }
      next = sa.charAt(0);
      sa = sa.slice(1);
    } else if (next === "b") {
      if (sb.length === 0) {
        console.log("B");
        break;
      }
      next = sb.charAt(0);
      sb = sb.slice(1);
    } else {
      if (sc.length === 0) {
        console.log("C");
        break;
      }
      next = sc.charAt(0);
      sc = sc.slice(1);
    }
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
