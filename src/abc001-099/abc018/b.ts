export default {};

function solve() {
  let s = nextS();
  const n = nextN();

  for (let i = 0; i < n; i++) {
    const l = nextN();
    const r = nextN();
    const a = s.split("");
    const a1 = a.slice(0, l - 1);
    const a2 = a.slice(l - 1, r);
    const a3 = a.slice(r);
    s = a1.join("") + a2.reverse().join("") + a3.join("");
  }

  console.log(s);
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
