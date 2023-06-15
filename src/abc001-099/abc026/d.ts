export default {};

function solve() {
  const a = nextN();
  const b = nextN();
  const c = nextN();

  const f = (t: number): number => a * t + b * Math.sin(c * t * Math.PI);

  let l = 0;
  let r = 200; // 条件から、200を超えることはない

  // 二分探索。増加する方だけを見付ければ良い。
  while (Math.abs(l - r) > 0.00000000001) {
    const t = (l + r) / 2;

    if (f(t) < 100) {
      l = t;
    } else {
      r = t;
    }
  }

  console.log(l);
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
