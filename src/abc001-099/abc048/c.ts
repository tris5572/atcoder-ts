export default {};

function solve() {
  const n = nextN();
  const x = nextN();
  const a = nextNI(n);

  // すべてをx以下にする。
  const array = a.map((v) => (v < x ? v : x));

  // 連続する2つを比べて、x 以下になるよう、後の方を減らす。
  for (let i = 0; i < array.length - 1; i++) {
    const v1 = array[i];
    const v2 = array[i + 1];
    if (x < v1 + v2) {
      array[i + 1] = x - v1;
    }
  }

  const t1 = a.reduce((a, b) => a + b);
  const t2 = array.reduce((a, b) => a + b);

  console.log(t1 - t2);
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
