export default {};

function solve() {
  const s = nextS();
  const t = nextN();
  let x = 0;
  let y = 0;
  let z = 0;

  for (const c of s.split("")) {
    switch (c) {
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      default:
        z++;
    }
  }

  const d = Math.abs(x) + Math.abs(y);

  if (t === 1) {
    // 最大値
    console.log(d + z);
  } else {
    // 最小値
    if (d <= z) {
      console.log(Math.abs(d - z) % 2);
    } else {
      console.log(d - z);
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
