export default {};

function solve() {
  const n = nextN();
  const data = [];

  for (let i = 0; i < n; i++) {
    const v = nextN();
    data.push(v);
  }

  const set = new Set(data);
  const a = Array.from(set);
  sortNumber(a);

  const dict: { [keys: number]: number } = {};
  for (let i = 0; i < a.length; i++) {
    dict[a[i]] = i;
  }

  for (const v of data) {
    console.log(dict[v]);
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

function sortNumber(array: number[]) {
  array.sort((a, b) => a - b);
}
