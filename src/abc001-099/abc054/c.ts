export default {};

function solve() {
  const n = nextN();
  const m = nextN();
  const data: number[][] = [];

  for (let i = 0; i < n; i++) {
    data.push([]);
  }

  for (let i = 0; i < m; i++) {
    const a = nextN() - 1;
    const b = nextN() - 1;
    data[a].push(b);
    data[b].push(a);
  }

  function f(index: number, visited: boolean[]): number {
    if (visited.every((v) => v)) {
      return 1;
    }

    let count = 0;
    for (const v of data[index]) {
      if (visited[v]) {
        continue;
      }
      const buf = [...visited];
      buf[v] = true;
      count += f(v, buf);
    }

    return count;
  }

  const visited = new Array(n).fill(false);
  visited[0] = true;
  console.log(f(0, visited));
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
