export default {};

function solve() {
  const n = num();
  const m = num();

  const pattern: number[] = [1];
  const broken: boolean[] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    broken[num()] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (broken[i]) {
      pattern[i] = 0;
      continue;
    }
    pattern[i] = pattern[i - 1];
    if (i !== 1) {
      pattern[i] += pattern[i - 2];
    }

    pattern[i] %= 1_000_000_007;
  }

  pr(pattern[n]);
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
