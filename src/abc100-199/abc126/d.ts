export default {};

type Edge = {
  to: number;
  length: number;
};

type Node = {
  color?: number;
  edge: Edge[];
  finished: boolean;
};

function solve() {
  const n = num();

  const data: Node[] = [];
  for (let i = 0; i < n; i++) {
    data.push({ color: undefined, edge: [], finished: false });
  }

  for (let i = 0; i < n - 1; i++) {
    const [u, v, w] = [num() - 1, num() - 1, num()];
    data[u].edge.push({ to: v, length: w });
    data[v].edge.push({ to: u, length: w });
  }

  function f(i: number) {
    data[i].finished = true;

    for (const e of data[i].edge) {
      const n = e.to;

      // すでに色が確定していたら飛ばす。
      if (data[n].finished) {
        continue;
      }
      const c = data[i].color!;
      data[n].color = e.length % 2 == 0 ? c : Math.abs(1 - c);

      f(n);
    }
  }

  data[0].color = 0;
  f(0);

  for (const d of data) {
    pr(d.color);
  }
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
