export default {};

function solve() {
  const n = nextN();
  const data: number[][] = [];
  for (let i = 0; i < n; i++) {
    data.push([]);
    for (let j = 0; j < n; j++) {
      data[i].push(nextN());
    }
  }

  const q = nextN();
  const p = nextNN(q);

  // [0][0] から [i][j] (1-index) までの長方形の合計の美味しさを計算する
  // あとの計算を楽にするため、インデックスが0のときは0の値を追加する
  const tastes: number[][] = [];
  tastes.push([]);
  for (let i = 0; i <= n; i++) {
    tastes[0].push(0);
  }
  for (let i = 0; i < n; i++) {
    tastes[i + 1] = [0];
    let left = 0;
    for (let j = 0; j < n; j++) {
      tastes[i + 1].push(tastes[i][j + 1] + left + data[i][j]);
      left += data[i][j];
    }
  }

  // 個数ごとの最大累計数を格納するリスト
  const values: number[] = [];
  for (let i = 0; i < n * n + 1; i++) {
    values.push(0);
  }

  // 長方形ごとに最大となる美味しさの合計を計算する。
  // i:高さ j:幅 a:行のオフセット b:列のオフセット
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let a = 0; a + i <= n; a++) {
        for (let b = 0; b + j <= n; b++) {
          const all = tastes[a + i][b + j];
          const top = tastes[a][b + j];
          const left = tastes[a + i][b];
          const lt = tastes[a][b];
          const t = all - top - left + lt;
          values[i * j] = Math.max(t, values[i * j]);
        }
      }
    }
  }

  // 少なく選んだ方が良いケースと、長方形にならない数字が指定されることがあるため、
  // そこまでの最大値で埋めていく
  let max = 0;
  for (let i = 0; i < values.length; i++) {
    max = Math.max(max, values[i]);
    values[i] = max;
  }

  for (let i = 0; i < p.length; i++) {
    console.log(values[p[i]]);
  }
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

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
