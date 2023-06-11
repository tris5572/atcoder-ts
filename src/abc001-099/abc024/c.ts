export default {};

function solve() {
  const n = nextN();
  const d = nextN();
  const k = nextN();

  const lr: [number, number][] = [];
  for (let i = 0; i < d; i++) {
    lr.push([nextN(), nextN()]);
  }

  // 行けるところまで行く。
  for (let i = 0; i < k; i++) {
    const s = nextN();
    const t = nextN();
    let now = s;

    for (let j = 0; j < lr.length; j++) {
      const l = lr[j][0];
      const r = lr[j][1];

      if (now < t) {
        if (l <= now) {
          if (t <= r) {
            console.log(j + 1);
            break;
          }
          now = Math.max(now, r);
        }
      } else {
        if (now <= r) {
          if (l <= t) {
            console.log(j + 1);
            break;
          }
          now = Math.min(now, l);
        }
      }
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
