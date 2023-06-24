export default {};

function solve() {
  // 連続した文字列を見て、aa または axa の形になっていることを調べれば充分。
  const s = nextS();
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
      console.log(i + 1, i + 2);
      flag = true;
      break;
    } else if (s.charAt(i) === s.charAt(i + 2)) {
      console.log(i + 1, i + 3);
      flag = true;
      break;
    }
  }

  if (!flag) {
    console.log("-1 -1");
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

function nextNI(n: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    array.push(nextN());
  }
  return array;
}
