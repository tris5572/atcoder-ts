export default {};

function solve() {
  const n = nextN();
  const k = nextN();
  const score: number[][] = [];

  for (let i = 0; i < n; i++) {
    score.push([]);
    for (let j = 0; j < k; j++) {
      score[i].push(nextN());
    }
  }

  function dfs(r: number, c: number, v: number): boolean {
    if (r === n) {
      return v === 0;
    }
    for (let i = 0; i < k; i++) {
      if (dfs(r + 1, i, v ^ score[r][c])) {
        return true;
      }
    }

    return false;
  }

  let b = false;
  for (let c = 0; c < k; c++) {
    b = b || dfs(0, c, 0);
  }
  console.log(b ? "Found" : "Nothing");
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
