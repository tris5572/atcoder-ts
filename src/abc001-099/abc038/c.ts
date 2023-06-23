export default {};

function solve() {
  const n = nextN();
  const a = nextNI(n);

  // l から連続する単調増加の数を探す。最小は1。
  // 連続した数 x=(r-l+1) から、x*(x-1)/2 により、取りうる数を求める。

  // l の値から見て単純増加になっている一番右のインデックスを返す。
  function search(l: number): number {
    let i = l;
    while (true) {
      if (i === n) {
        return n - 1;
      }
      if (a[i + 1] <= a[i]) {
        return i;
      }
      i++;
    }
  }

  let l = 0;
  let count = 0;
  while (l < n) {
    const r = search(l);
    const x = r - l + 1;
    count += (x * (x + 1)) / 2;
    l = r + 1;
  }

  console.log(count);
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
