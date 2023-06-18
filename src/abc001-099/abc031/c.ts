export default {};

function solve() {
  const n = nextN();
  const a = nextNI(n);

  // 0基準で、偶数が高橋、奇数が青木
  let takahashiMax = -999999999;

  // 高橋が選んだ位置
  for (let ti = 0; ti < n; ti++) {
    let tkMaxInAo = -999999999;
    let aoMax = -999999999;
    // 青木が選ぶ位置
    for (let ai = 0; ai < n; ai++) {
      // 同じ番号は選ばない
      if (ti === ai) {
        continue;
      }
      let tk = 0;
      let ao = 0;
      for (let i = Math.min(ti, ai); i <= Math.max(ti, ai); i++) {
        if ((i - Math.min(ti, ai)) % 2 === 0) {
          tk += a[i];
        } else {
          ao += a[i];
        }
      }
      if (aoMax < ao) {
        aoMax = ao;
        tkMaxInAo = tk;
      }
    }
    if (takahashiMax < tkMaxInAo) {
      takahashiMax = tkMaxInAo;
    }
  }

  console.log(takahashiMax);
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

function nextNI(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}
