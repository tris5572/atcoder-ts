export default {};

function solve() {
  const data = [1, 2, 3, 4, 5, 6];

  const n = nextN();

  // 30回入れ替えると元に戻る。
  for (let i = 0; i < n % 30; i++) {
    const x = i % 5;
    const b = data[x];
    data[x] = data[x + 1];
    data[x + 1] = b;
  }

  console.log(array2String(data, ""));
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

function array2String(array: any[], sep: string): string {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    if (i != 0) {
      output += sep;
    }
    output += `${array[i]}`;
  }
  return output;
}
