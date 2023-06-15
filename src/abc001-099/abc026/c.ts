export default {};

function solve() {
  const n = nextN();
  const staff: number[][] = []; // 各IDの部下のリスト
  const memo: number[] = new Array(n + 1).fill(-1);

  for (let i = 0; i <= n; i++) {
    staff.push([]);
  }

  for (let i = 0; i < n - 1; i++) {
    staff[nextN()].push(i + 2);
  }

  function calc(id: number): number {
    if (memo[id] !== -1) {
      return memo[id];
    }

    if (staff[id].length === 0) {
      memo[id] = 1;
      return 1;
    }

    const values = [];
    for (const i of staff[id]) {
      values.push(calc(i));
    }
    const v = Math.max(...values) + Math.min(...values) + 1;
    memo[id] = v;

    return v;
  }

  console.log(calc(1));
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
