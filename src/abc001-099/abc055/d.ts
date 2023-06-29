export default {};

function solve() {
  const Yes = "o";
  const No = "x";
  const Sheep = true;
  const Wolf = false;
  type Animal = boolean;

  const n = nextN();
  const s = nextS();
  const data = s.split("");

  // 連続した2匹が羊と狼のどちらか分かれば他は確定する。
  const a: [Animal, Animal][] = [
    [Sheep, Sheep],
    [Sheep, Wolf],
    [Wolf, Sheep],
    [Wolf, Wolf],
  ];

  for (const v of a) {
    const x = check(sim(v));
    if (x !== undefined) {
      console.log(x);
      return;
    }
  }

  console.log(-1);

  // 最初の2匹の種類から、あり得る並びをシミュレートして返す。
  function sim(first: [Animal, Animal]): Animal[] {
    const a: Animal[] = [...first];

    for (let i = 1; i < n - 1; i++) {
      const now = data[i];
      if (a[i] === Sheep) {
        if (now === Yes) {
          a.push(a[i - 1]);
        } else {
          a.push(!a[i - 1]);
        }
      } else {
        if (now === No) {
          a.push(a[i - 1]);
        } else {
          a.push(!a[i - 1]);
        }
      }
    }

    return a;
  }

  // 動物の並びが元データと整合性が取れているかどうかをチェックする。
  // 正しければ SとW の文字列。誤っていれば undefined。
  function check(animal: Animal[]): string | undefined {
    for (let i = 0; i < n; i++) {
      const iPrev = i === 0 ? n - 1 : i - 1;
      const iNext = i === n - 1 ? 0 : i + 1;
      const prev = animal[iPrev];
      const now = animal[i];
      const next = animal[iNext];
      const nowData = data[i];

      if (now === Sheep) {
        if (nowData === Yes && prev !== next) {
          return undefined;
        }
        if (nowData === No && prev === next) {
          return undefined;
        }
      } else {
        if (nowData === Yes && prev === next) {
          return undefined;
        }
        if (nowData === No && prev !== next) {
          return undefined;
        }
      }
    }

    let str = "";
    for (const v of animal) {
      if (v) {
        str += "S";
      } else {
        str += "W";
      }
    }
    return str;
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
