export default {};

function solve() {
  const n = nextN();

  let maxS = "";
  let maxP = -1;
  let total = 0;

  for (let i = 0; i < n; i++) {
    const s = nextS();
    const p = nextN();
    total += p;
    if (maxP < p) {
      maxP = p;
      maxS = s;
    }
  }

  if (total / 2 < maxP) {
    console.log(maxS);
  } else {
    console.log("atcoder");
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
