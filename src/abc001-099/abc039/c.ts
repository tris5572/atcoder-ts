export default {};

function solve() {
  const s = nextS();
  const p1 = s.indexOf("WW");
  const p2 = s.indexOf("WW", p1 + 1);
  const d = p2 - p1;

  if (d === 7) {
    switch (p1) {
      case 4:
        console.log("Do");
        break;
      case 2:
        console.log("Re");
        break;
      case 0:
        console.log("Mi");
        break;
    }
  } else {
    switch (p1) {
      case 6:
        console.log("Fa");
        break;
      case 4:
        console.log("So");
        break;
      case 2:
        console.log("La");
        break;
      case 0:
        console.log("Si");
        break;
    }
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
