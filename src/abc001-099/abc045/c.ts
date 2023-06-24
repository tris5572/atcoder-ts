export default {};

function solve() {
  const s = nextS();
  const keta = s.length - 1;
  const array = s.split("");
  let total = 0;

  for (let i = 0; i < 2 ** keta; i++) {
    let ss = "";
    for (let j = 0; j <= keta; j++) {
      ss += array[j];
      if ((i & (1 << j)) !== 0) {
        ss += "+";
      }
    }
    total += ss
      .split("+")
      .map((v) => Number(v))
      .reduce((a, b) => a + Number(b));
  }

  console.log(total);
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
