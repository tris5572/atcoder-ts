export default {};

function solve() {
  const h = num();
  const w = num();
  const data: string[][] = [];

  for (let i = 0; i < h; i++) {
    const z = str();
    data.push(z.split(""));
  }

  // 座標から上下左右にそれぞれ見たときに、何個照らせるか。
  const up: number[][] = [];
  const down: number[][] = [];
  const left: number[][] = [];
  const right: number[][] = [];

  for (let i = 0; i < h; i++) {
    up.push(new Array(w).fill(0));
    for (let j = 0; j < w; j++) {
      if (data[i][j] === "#") {
        up[i][j] = 0;
      } else {
        if (i === 0) {
          if (data[i][j] === ".") {
            up[i][j] = 1;
          }
        } else {
          up[i][j] = up[i - 1][j] + 1;
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    left.push(new Array(w).fill(0));
    for (let j = 0; j < w; j++) {
      if (data[i][j] === "#") {
        left[i][j] = 0;
      } else {
        if (j === 0) {
          if (data[i][j] === ".") {
            left[i][j] = 1;
          }
        } else {
          left[i][j] = left[i][j - 1] + 1;
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    down.push(new Array(w).fill(0));
  }
  for (let i = h - 1; 0 <= i; i--) {
    for (let j = w - 1; 0 <= j; j--) {
      if (data[i][j] === "#") {
        down[i][j] = 0;
      } else {
        if (i === h - 1) {
          if (data[i][j] === ".") {
            down[i][j] = 1;
          }
        } else {
          down[i][j] = down[i + 1][j] + 1;
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    right.push(new Array(w).fill(0));
  }
  for (let i = h - 1; 0 <= i; i--) {
    for (let j = w - 1; 0 <= j; j--) {
      if (data[i][j] === "#") {
        right[i][j] = 0;
      } else {
        if (j === w - 1) {
          if (data[i][j] === ".") {
            right[i][j] = 1;
          }
        } else {
          right[i][j] = right[i][j + 1] + 1;
        }
      }
    }
  }

  let max = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (data[i][j] === ".") {
        const v = up[i][j] + down[i][j] + left[i][j] + right[i][j] - 3;
        max = Math.max(max, v);
      }
    }
  }

  pr(max);
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
