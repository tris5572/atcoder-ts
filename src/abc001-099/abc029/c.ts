export default {};

function solve() {
  const n = nextN();

  function f(z: number): string[] {
    if (z === 1) {
      return ["a", "b", "c"];
    }
    const a = f(z - 1);
    const array = [];
    for (let i = 0; i < a.length; i++) {
      const v = a[i];
      array.push(v + "a", v + "b", v + "c");
    }
    return array;
  }

  const array = f(n);

  for (const v of array) {
    console.log(v);
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
