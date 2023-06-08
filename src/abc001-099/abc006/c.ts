export default {};

function solve() {
  const p = nextN(); // People
  const f = nextN(); // Foot

  // 老人2人と、大人と赤ちゃん1人ずつは同じことと見なせる(2人で足6本)。
  // したがって老人0人か老人1人だけを考えれば良い。

  const old = f % 2; // 老人の数は、全体人数が奇数のときは1人で、偶数のときは0人
  let adult = 0;
  let baby = 0;
  let flag = false;

  for (let b = 0; b <= p; b++) {
    adult = p - old - b;
    if (adult < 0) {
      break;
    }

    if (adult * 2 + old * 3 + b * 4 == f) {
      baby = b;
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log(`${adult} ${old} ${baby}`);
  } else {
    console.log("-1 -1 -1");
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
