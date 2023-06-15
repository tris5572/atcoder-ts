export default {};

function solve() {
  const n = nextN();
  const a = nextNN(n);

  let total = 0;

  for (const v of a) {
    total += v;
  }

  if (total % n !== 0) {
    console.log(-1);
    return;
  }

  const one = total / n; // 1つの島あたりの人数
  let count = 0; // 橋の数

  // 間に橋を架ける必要があるのは、左の島の数 * 1島人数 != 左側にいる人数 のとき。
  // 解けないケースはカバー済みなので、これで解ける。
  for (let i = 1; i < n; i++) {
    let left = 0;
    for (let j = 0; j < i; j++) {
      left += a[j];
    }
    if (one * i !== left) {
      count++;
    }
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

function nextNN(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}
