export default {};

function solve() {
  const n = nextN();
  const set = new Set<number>();

  // 引数を可能な限り2で割った数を返す。
  const div2 = (num: number): number => {
    let v = num;
    while (v % 2 === 0) {
      v /= 2;
    }
    return v;
  };

  for (let i = 0; i < n; i++) {
    set.add(div2(nextN()));
  }

  console.log(set.size);
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
