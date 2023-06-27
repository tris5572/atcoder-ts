export default {};

function solve() {
  const w = nextN();
  const h = nextN();
  const n = nextN();
  let x1 = 0;
  let x2 = w;
  let y1 = 0;
  let y2 = h;

  for (let i = 0; i < n; i++) {
    const [x, y, a] = [nextN(), nextN(), nextN()];
    if (a === 1) {
      x1 = Math.max(x1, x);
    } else if (a === 2) {
      x2 = Math.min(x2, x);
    } else if (a === 3) {
      y1 = Math.max(y1, y);
    } else {
      y2 = Math.min(y2, y);
    }
  }

  if (x2 <= x1 || y2 <= y1) {
    console.log(0);
  } else {
    console.log((x2 - x1) * (y2 - y1));
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
