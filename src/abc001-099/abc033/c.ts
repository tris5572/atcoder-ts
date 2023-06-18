export default {};

function solve() {
  const s = nextS();

  const a = s.split("+");
  let count = 0;

  for (const v of a) {
    if (v === "0") {
      continue;
    }
    // 掛け算か数字1桁かのいずれか
    if (v.includes("0")) {
      continue;
    } else {
      count++;
    }
  }

  console.log(count);
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
