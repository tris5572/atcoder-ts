export default {};

function solve() {
  const n = nextN();
  const k = nextN();
  const d = nextNI(k);

  let num = n;

  while (true) {
    let flag = true;

    let v = num;
    while (0 < v) {
      const x = v % 10;
      if (d.includes(x)) {
        flag = false;
      }
      v = Math.trunc(v / 10);
    }

    if (flag) {
      break;
    }
    num++;
  }

  console.log(num);
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
