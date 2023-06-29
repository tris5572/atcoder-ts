export default {};

function solve() {
  const n = nextN();
  let a = 1;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let a = 1; a * a <= n; a++) {
    if (n % a !== 0) {
      continue;
    }

    const b = n / a;
    const x = Math.max(f(a), f(b));
    ans = Math.min(ans, x);
  }

  // 渡された数字の10進桁数を返す。
  function f(a: number): number {
    let x = a;
    let k = 0;

    while (0 < x) {
      x = Math.trunc(x / 10);
      k++;
    }

    return k;
  }

  console.log(ans);
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
