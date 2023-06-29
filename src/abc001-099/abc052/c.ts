export default {};

function solve() {
  const n = nextN();
  let count = new Array(n + 1).fill(0);

  // 素数でそれぞれ何回割れるかをカウント
  for (let i = n; 1 <= i; i--) {
    f(i);
  }

  let ans = 1;
  for (let i = 1; i < count.length; i++) {
    ans *= count[i] + 1;
    ans = ans % 1000000007;
  }
  console.log(ans);

  function f(v: number) {
    let x = v;
    for (let i = 2; i * i <= v; i++) {
      while (x % i == 0) {
        count[i]++;
        x = Math.trunc(x / i);
      }
    }
    if (x != 1) {
      count[x]++;
    }
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
