export default {};

function solve() {
  const ax = nextN();
  const ay = nextN();
  const bx = nextN();
  const by = nextN();
  const n = nextN();
  const data: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    data.push([nextN(), nextN()]);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    const j = i === n - 1 ? 0 : i + 1;
    if (
      isCross(ax, ay, bx, by, data[i][0], data[i][1], data[j][0], data[j][1])
    ) {
      count++;
    }
  }

  // 多角形の辺を線分が横切る回数/2 + 1 に分割される。
  console.log(count / 2 + 1);
}

function isCross(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
  dx: number,
  dy: number
): boolean {
  const ta = (cx - dx) * (ay - cy) + (cy - dy) * (cx - ax);
  const tb = (cx - dx) * (by - cy) + (cy - dy) * (cx - bx);
  const tc = (ax - bx) * (cy - ay) + (ay - by) * (ax - cx);
  const td = (ax - bx) * (dy - ay) + (ay - by) * (ax - dx);

  return tc * td < 0 && ta * tb < 0;
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
