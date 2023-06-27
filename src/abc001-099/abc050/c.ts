export default {};

function solve() {
  const n = nextN();
  const a = nextNI(n);
  sortNumber(a);

  let endFlag = false;

  // 解けるかどうかをチェック
  for (let i = 0; i < n - 1; ) {
    // 人数が奇数のとき、中央(最初は1人だけ0
    if (i === 0 && n % 2 === 1) {
      if (a[0] !== 0) {
        endFlag = true;
        break;
      }
      i++;
      continue;
    }

    if (a[i] !== i + 1 || a[i + 1] !== i + 1) {
      endFlag = true;
      break;
    }
    i += 2;
  }

  if (endFlag) {
    console.log(0);
    return;
  }

  function pow(a: number, b: number): bigint {
    let n = 1n;
    for (let i = 0; i < b; i++) {
      n *= BigInt(a);
    }
    return n;
  }

  console.log((pow(2, Math.trunc(n / 2)) % 1000000007n).toString());
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

function sortNumber(array: number[]) {
  array.sort((a, b) => a - b);
}
