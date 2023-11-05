export default {};

function solve() {
  const [a, b, c, d] = [big(), big(), big(), big()];

  function f(x: bigint): bigint {
    return x - x / c - x / d + x / lcmBig(c, d);
  }

  pr((f(b) - f(a - 1n)).toString());
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

function big(): bigint {
  return BigInt(str());
}

// 最大公約数（BigInt）
function gcdBig(a: bigint, b: bigint): bigint {
  if (b === 0n) {
    return a;
  } else {
    return gcdBig(b, a % b);
  }
}

// 最小公倍数（BigInt）
function lcmBig(a: bigint, b: bigint): bigint {
  return (a / gcdBig(a, b)) * b;
}
