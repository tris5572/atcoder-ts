// 出てくる数の大きい方から選ぶ。
// 枚数が多くなるので、Mapを使う。

export default {};

function solve() {
  const n = num();
  const m = num();
  const map = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const a = num();
    const v = map.get(a);
    if (v === undefined) {
      map.set(a, 1);
    } else {
      map.set(a, v + 1);
    }
  }

  for (let i = 0; i < m; i++) {
    const [b, c] = [num(), num()];
    const v = map.get(c);
    if (v === undefined) {
      map.set(c, b);
    } else {
      map.set(c, v + b);
    }
  }

  const keys = [...map.keys()].sort((a, b) => b - a);

  let count = 0;
  let total = 0;
  for (const k of keys) {
    const c = map.get(k)!;
    if (n < count + c) {
      total += (n - count) * k;
      break;
    }
    total += k * c;
    count += c;
  }

  pr(total);
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
