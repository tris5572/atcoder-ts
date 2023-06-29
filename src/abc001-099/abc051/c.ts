export default {};

function solve() {
  const sx = nextN();
  const sy = nextN();
  const tx = nextN();
  const ty = nextN();

  const dy = ty - sy;
  const dx = tx - sx;

  process.stdout.write("U".repeat(dy));
  process.stdout.write("R".repeat(dx));

  process.stdout.write("D".repeat(dy));
  process.stdout.write("L".repeat(dx));

  process.stdout.write("L");
  process.stdout.write("U".repeat(dy + 1));
  process.stdout.write("R".repeat(dx + 1));
  process.stdout.write("D");

  process.stdout.write("R");
  process.stdout.write("D".repeat(dy + 1));
  process.stdout.write("L".repeat(dx + 1));
  process.stdout.write("U");

  console.log("");
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
