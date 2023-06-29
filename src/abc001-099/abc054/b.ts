export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  const a = [];
  const b = [];
  let flag = false;

  for (let i = 0; i < n; i++) {
    a.push(nextS());
  }
  for (let i = 0; i < n; i++) {
    b.push(nextS());
  }

  for (let si = 0; si <= n - m; si++) {
    for (let sj = 0; sj <= n - m; sj++) {
      let f = true;

      for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
          if (a[si + i].charAt(sj + j) !== b[i].charAt(j)) {
            f = false;
          }
        }
      }

      if (f) {
        flag = true;
      }
    }
  }

  console.log(flag ? "Yes" : "No");
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
