export default {};

function solve() {
  const n = num();
  const k = num();
  const a = [];

  for (let i = 0; i < n; i++) {
    a.push(num());
  }

  const acc = [0];
  let t = 0;
  for (const v of a) {
    t += v;
    acc.push(t);
  }

  let count = 0;
  let r = 1;

  loop: {
    for (let l = 0; l < n; l++) {
      while (acc[r] - acc[l] < k) {
        r++;
        if (n < r) {
          break loop;
        }
      }

      count += n - r + 1;
    }
  }

  pr(count);
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function pr(...v: any) {
  console.log(...v);
}
function wr(s: any) {
  process.stdout.write(String(s));
}
function epr(...v: any) {
  console.error(...v);
}

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

function str(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function num(): number {
  return Number(str());
}
