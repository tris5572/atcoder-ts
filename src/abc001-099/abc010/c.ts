export default {};

function solve() {
  const sx = nextN();
  const sy = nextN();
  const gx = nextN();
  const gy = nextN();
  const t = nextN();
  const v = nextN();
  const n = nextN();

  const array: [number, number][] = [];
  let flag = false;

  for (let i = 0; i < n; i++) {
    const x = nextN();
    const y = nextN();
    array.push([x, y]);
  }

  for (const [x, y] of array) {
    if (
      Math.sqrt((sx - x) ** 2 + (sy - y) ** 2) +
        Math.sqrt((gx - x) ** 2 + (gy - y) ** 2) <=
      t * v
    ) {
      flag = true;
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
