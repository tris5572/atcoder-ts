export default {};

function solve() {
  const n = nextN();
  const k = nextN();
  const data = nextNI(n);

  if (data.includes(0)) {
    console.log(n);
    return;
  }

  let max = 0;
  let l = 0;
  let r = 0;
  let v = 1;

  while (r <= n) {
    if (r <= l) {
      v *= data[r];
      r++;
      continue;
    }

    if (v <= k) {
      max = Math.max(max, r - l);
      v *= data[r];
      r++;
    } else {
      v /= data[l];
      l++;
    }
  }

  console.log(max);
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
