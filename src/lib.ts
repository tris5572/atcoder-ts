export default {};

function solve() {}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// input / output
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

function num2(): [number, number] {
  return [num(), num()];
}

function nums(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(num());
  }
  return array;
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// number
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function bigpow(a: number, b: number): bigint {
  let n = 1n;
  for (let i = 0; i < b; i++) {
    n *= BigInt(a);
  }
  return n;
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// array
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function array2String(array: any[], sep: string): string {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    if (i != 0) {
      output += sep;
    }
    output += `${array[i]}`;
  }
  return output;
}

function sortNumber(array: number[]) {
  array.sort((a, b) => a - b);
}

function sortNumberR(array: number[]) {
  array.sort((a, b) => b - a);
}

// 配列の中から、指定値以上の最初の要素のインデックスを返す。
function lowerBound<T>(
  a: T[],
  v: T,
  f: (l: T, r: T) => boolean = (l: T, r: T) => l < r
): number {
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    const m = l + Math.trunc((r - l) / 2);
    if (f(a[m], v)) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
}

// 配列の中から、指定値を超えた最初の要素のインデックスを返す。
function upperBound<T>(
  a: T[],
  v: T,
  f: (l: T, r: T) => boolean = (l: T, r: T) => l < r
): number {
  return lowerBound(a, v, (l, r) => !f(r, l));
}

// const b = [1, 2, 2, 2, 2, 3, 3, 4];
// console.log(lowerBound(b, 0), 0);
// console.log(lowerBound(b, 1), 0);
// console.log(lowerBound(b, 2), 1);
// console.log(lowerBound(b, 3), 5);
// console.log(lowerBound(b, 4), 7);
// console.log(lowerBound(b, 9), 8);

// console.log(upperBound(b, 0), 0);
// console.log(upperBound(b, 1), 1);
// console.log(upperBound(b, 2), 5);
// console.log(upperBound(b, 3), 7);
// console.log(upperBound(b, 4), 8);
// console.log(upperBound(b, 9), 8);

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// 図形
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

// 2つの線分が交差していることを判定する。
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
