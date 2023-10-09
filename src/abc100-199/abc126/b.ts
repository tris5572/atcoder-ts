export default {};

function solve() {
  const s = str();

  const a = Number(s.substring(0, 2));
  const b = Number(s.substring(2, 4));

  if (1 <= a && a <= 12) {
    if (1 <= b && b <= 12) {
      pr("AMBIGUOUS");
    } else {
      pr("MMYY");
    }
  } else {
    if (1 <= b && b <= 12) {
      pr("YYMM");
    } else {
      pr("NA");
    }
  }
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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
