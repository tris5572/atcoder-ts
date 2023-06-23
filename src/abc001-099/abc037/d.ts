export default {};

function solve() {
  const NULL = -1;
  const h = nextN();
  const w = nextN();
  const data: number[][] = [];
  const dp: number[][] = [];

  for (let i = 0; i <= h + 1; i++) {
    if (i === 0 || i === h + 1) {
      data.push(new Array(w + 2).fill(NULL));
    } else {
      data.push([NULL]);
      for (let j = 0; j < w; j++) {
        data[i].push(nextN());
      }
      data[i].push(NULL);
    }
    data[i][0] = NULL;
    data[i][w + 1] = NULL;
  }

  for (let i = 0; i <= h + 1; i++) {
    dp.push(new Array(w + 2).fill(NULL));
  }

  // -  -  -  -  -
  function calc(r: number, c: number): number {
    if (dp[r][c] !== NULL) {
      return dp[r][c];
    }

    let count = 1;
    if (data[r][c] < data[r - 1][c]) {
      count += calc(r - 1, c);
    }
    if (data[r][c] < data[r + 1][c]) {
      count += calc(r + 1, c);
    }
    if (data[r][c] < data[r][c - 1]) {
      count += calc(r, c - 1);
    }
    if (data[r][c] < data[r][c + 1]) {
      count += calc(r, c + 1);
    }

    count %= 1000000007;
    dp[r][c] = count;
    return count;
  }
  // -  -  -  -  -

  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      calc(i, j);
    }
  }

  let total = 0n;
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      total += BigInt(dp[i][j]);
    }
  }

  console.log((total % 1000000007n).toString());
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
