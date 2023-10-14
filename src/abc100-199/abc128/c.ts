export default {};

function solve() {
  const OFF = 0;
  const ON = 1;
  type ONOFF = typeof OFF | typeof ON;

  const n = num();
  const m = num();

  const ss: (typeof ON | typeof OFF)[][] = [];
  const lamps: { s: ONOFF[]; mod: number }[] = [];

  for (let i = 0; i < m; i++) {
    ss.push(new Array(n).fill(OFF));
    const k = num();
    for (let j = 0; j < k; j++) {
      ss[i][num() - 1] = ON;
    }
  }
  for (let i = 0; i < m; i++) {
    lamps.push({ s: ss[i], mod: num() });
  }

  let count = 0;

  function search(sw: ONOFF[]) {
    if (sw.length === n) {
      let flag = true;
      for (let i = 0; i < m; i++) {
        let cnt = 0;
        for (let j = 0; j < lamps[i].s.length; j++) {
          if (lamps[i].s[j] === ON && sw[j] === ON) {
            cnt++;
          }
        }
        if (cnt % 2 !== lamps[i].mod) {
          flag = false;
        }
      }
      if (flag) {
        count++;
      }
      return;
    }
    search([...sw, OFF]);
    search([...sw, ON]);
  }

  search([OFF]);
  search([ON]);

  pr(count);
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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
