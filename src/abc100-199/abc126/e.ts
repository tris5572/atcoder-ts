export default {};

function solve() {
  const n = num();
  const m = num();

  const data = new UnionFind(n);

  for (let i = 0; i < m; i++) {
    const [x, y] = [num() - 1, num() - 1, num()];
    data.unite(x, y);
  }

  pr(data.rootCount());
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function pr(...v: any) {
  console.log(...v);
}
function wr(s: any) {
  process.stdout.write(String(s));
}
function epr(...v: any) {
  console.error(...v);
}

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

function str(): string {
  const v = __inputValues[__inputIndex];
  __inputIndex++;
  return v;
}

function num(): number {
  return Number(str());
}

class UnionFind {
  ROOT = -1;
  parent: number[];
  size: number[];
  constructor(n: number) {
    this.parent = new Array(n).fill(this.ROOT);
    this.size = new Array(n).fill(1);
  }
  root(x: number): number {
    if (this.parent[x] === this.ROOT) {
      return x;
    }
    this.parent[x] = this.root(this.parent[x]);
    return this.parent[x];
  }
  isSame(x: number, y: number) {
    return this.root(x) === this.root(y);
  }
  unite(x: number, y: number) {
    let rootX = this.root(x);
    let rootY = this.root(y);
    if (rootX === rootY) {
      return;
    }
    if (this.size[rootX] < this.size[rootY]) {
      const z = rootX;
      rootX = rootY;
      rootY = z;
    }
    this.parent[rootY] = rootX;
    this.size[rootX] += this.size[rootY];
  }
  rootCount(): number {
    return this.parent.filter((v) => v === -1).length;
  }
}
