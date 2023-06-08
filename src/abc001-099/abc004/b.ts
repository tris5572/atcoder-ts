export default {};

function solve() {
  const board: string[][] = [];

  for (let i = 0; i < 4; i++) {
    board.push([]);
    for (let j = 0; j < 4; j++) {
      board[i].push(nextS());
    }
  }

  for (let i = 3; 0 <= i; i--) {
    const v = board[i];
    console.log(`${v[3]} ${v[2]} ${v[1]} ${v[0]}`);
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
