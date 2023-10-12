export default {};

function solve() {
  const n = num();
  const m = num();

  let ll = 1;
  let rr = n;

  for (let i = 0; i < m; i++) {
    const [l, r] = [num(), num()];
    ll = Math.max(ll, l);
    rr = Math.min(rr, r);
  }

  if (rr < ll) {
    pr(0);
  } else {
    pr(rr - ll + 1);
  }
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function pr(...v: any) {
  console.log(...v);
}
function wr(s: any) {
  process.stdout.write(String(s));
}
function epr(...v: any) {
  console.error(...v);
}

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

function str(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function num(): number {
  return Number(str());
}

// function solve() {
//   const n = num();
//   const m = num();

//   const data = new Array(n + 1).fill(0);

//   for (let i = 0; i < m; i++) {
//     const [l, r] = [num() - 1, num()];
//     data[l]++;
//     data[r]--;
//   }

//   let total = 0;
//   const count = [];
//   for (const v of data) {
//     total += v;
//     count.push(total);
//   }

//   const ans = count.filter((v) => m <= v).length;
//   pr(data);
//   pr(count);

//   pr(ans);
// }
