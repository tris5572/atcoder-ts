export default {};

function solve() {
  const n = nextN();
  const a = nextN();
  const b = nextN();

  let pos = 0;

  for (let i = 0; i < n; i++) {
    const s = nextS();
    const d = nextN();
    let dd = d;
    if (d < a) {
      dd = a;
    } else if (b < d) {
      dd = b;
    }

    if (s === "West") {
      pos -= dd;
    } else {
      pos += dd;
    }
  }

  if (pos === 0) {
    console.log(0);
  } else if (0 < pos) {
    console.log("East", pos);
  } else {
    console.log("West", -pos);
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
