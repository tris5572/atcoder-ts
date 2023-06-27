export default {};

function solve() {
  const ss = nextS();
  let ww = ["dream", "dreamer", "erase", "eraser"];

  const sr = ss.split("").reverse().join("");
  const wr = ww.map((v) => v.split("").reverse().join(""));

  let s = sr;
  let flag = false;
  while (true) {
    flag = false;
    for (const w of wr) {
      if (s.startsWith(w)) {
        s = s.substring(w.length);
        flag = true;
        break;
      }
    }
    if (s.length === 0) {
      break;
    }
    if (!flag) {
      break;
    }
  }

  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
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
