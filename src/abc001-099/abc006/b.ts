export default {};

function solve() {
  const n = nextN();

  const a = [0, 0, 0, 1];

  if (n <= 3) {
    console.log(a[n]);
    return;
  }

  for (let i = 4; i <= n; i++) {
    a.push((a[i - 1] + a[i - 2] + a[i - 3]) % 10007);
  }
  console.log(a[n] % 10007);
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
