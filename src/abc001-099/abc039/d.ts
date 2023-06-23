export default {};

function solve() {
  const White = false;
  const Black = true;

  const h = nextN();
  const w = nextN();
  const data: boolean[][] = [];

  for (let i = 0; i < h; i++) {
    const s = nextS();
    data.push([]);
    for (const c of s.split("")) {
      if (c === ".") {
        data[i].push(White);
      } else {
        data[i].push(Black);
      }
    }
  }

  const moto: boolean[][] = []; // 最初の状態を仮定したもの
  for (let i = 0; i < h; i++) {
    moto.push(new Array(w).fill(Black));
  }
  // 圧縮後の白の周囲を含んだ9ピクセルは元々白のはずなので仮定を生成
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (data[i][j] === White) {
        for (let a = -1; a <= 1; a++) {
          for (let b = -1; b <= 1; b++) {
            const y = i + a;
            const x = j + b;
            if (0 <= y && y < h && 0 <= x && x < w) {
              moto[y][x] = White;
            }
          }
        }
      }
    }
  }

  // 仮定を圧縮してみて、同じ結果になるかどうかをチェック
  const after: boolean[][] = [];
  for (let i = 0; i < h; i++) {
    after.push(new Array(w).fill(White));
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (moto[i][j] === Black) {
        for (let a = -1; a <= 1; a++) {
          for (let b = -1; b <= 1; b++) {
            const y = i + a;
            const x = j + b;
            if (0 <= y && y < h && 0 <= x && x < w) {
              after[y][x] = Black;
            }
          }
        }
      }
    }
  }

  let flag = true;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (data[i][j] !== after[i][j]) {
        flag = false;
      }
    }
  }

  if (flag) {
    console.log("possible");
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        process.stdout.write(moto[i][j] === Black ? "#" : ".");
      }
      console.log("");
    }
  } else {
    console.log("impossible");
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
