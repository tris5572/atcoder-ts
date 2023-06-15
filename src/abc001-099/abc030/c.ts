export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  const x = nextN();
  const y = nextN();
  const a = nextNI(n);
  const b = nextNI(m);

  let count = 0;
  let time = 0;

  while (true) {
    const na = lowerBound(a, time);
    if (a.length <= na) {
      break;
    }
    count++;
    time = a[na] + x;

    const nb = lowerBound(b, time);
    if (b.length <= nb) {
      break;
    }
    count++;
    time = b[nb] + y;
  }

  console.log(Math.trunc(count / 2));
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

function nextNI(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}

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
