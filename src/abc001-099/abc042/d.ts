export default {};

// 未回答
// 愚直に計算していくだけではメモリ不足になる。
// マスの数が 10^12 なので、領域を確保するだけでGB単位のメモリを消費してしまう。

function solve() {
  const h = nextN();
  const w = nextN();
  const a = nextN();
  const b = nextN();
  const data = [];

  for (let i = 0; i < h; i++) {
    data.push(new Array(w).fill(1));
  }

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (h - a <= i && j < b) {
        continue;
      }
      // 移動できないマスの右側のときは、上からの値だけ
      if (h - a <= i && j === b) {
        data[i][j] = data[i - 1][j] % 1000000007;
      } else {
        data[i][j] = (data[i - 1][j] + data[i][j - 1]) % 1000000007;
      }
    }
  }

  // for (const d of data) {
  //   for (const v of d) {
  //     process.stdout.write(`${v}\t`);
  //   }
  //   console.log("");
  // }

  console.log(data[h - 1][w - 1]);
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
