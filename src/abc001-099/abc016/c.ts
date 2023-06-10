export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  const data: boolean[][] = [];

  for (let i = 0; i <= n; i++) {
    data.push(new Array(n + 1).fill(false));
  }

  for (let i = 0; i < m; i++) {
    const a = nextN();
    const b = nextN();
    data[a][b] = true;
    data[b][a] = true;
  }

  for (let i = 1; i <= n; i++) {
    const set = new Set<number>(); // 友達の友達の重複を排除するために Set を使用
    for (let j = 1; j <= n; j++) {
      if (data[i][j] && i !== j) {
        // jがiの友達のとき、jの友達を見て、それがiの友達でないときにカウントアップ
        for (let k = 1; k <= n; k++) {
          if (i === k || j === k) {
            continue;
          }
          if (data[j][k] && !data[i][k]) {
            set.add(k);
          }
        }
      }
    }
    console.log(set.size);
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
