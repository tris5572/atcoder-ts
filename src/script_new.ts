// コンテストで使用するスクリプトやテストケースを AtCoder のサイトから取得する。
// npm run new abc001

export default {};

import { exit } from "process";
import fs from "fs";
import { getContestData } from "./script_new_mod";

// スクリプトのテンプレート ---------------------------------------------------
const TEMPLETE = `export default {};

function solve() {
  const n = nextN();

  console.log(n);
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
`;
// -------------------------------------------------------------------------

async function main() {
  const argv = process.argv;

  if (argv.length < 3) {
    console.log(
      "エラー: コマンドライン引数としてコンテスト名(例:abc123)を指定してください"
    );
    exit(0);
  }

  const contestName = argv[2];

  // コンテストの情報を取得する
  const data = await getContestData(contestName);
  if (data == undefined) {
    console.error("エラー: コンテストの情報を取得できませんでした");
    exit(0);
  }

  // 出力先フォルダが存在しない場合は作成する。
  if (!fs.existsSync(contestName)) {
    fs.mkdirSync(`./src/${contestName}`);
  }
  fs.mkdirSync(`./src/${contestName}/tests`);
  fs.mkdirSync(`./src/${contestName}/tests/in`);
  fs.mkdirSync(`./src/${contestName}/tests/out`);

  // 各問題のスクリプトとテストケースのファイルを作成する。
  for (const d of data) {
    // .ts ファイル
    writeFile(`./src/${contestName}/${d.level}.ts`, TEMPLETE);

    // 入力例と出力例
    for (let i = 0; i < d.tests.length; i++) {
      writeFile(
        `./src/${contestName}/tests/in/${d.level}${i + 1}.txt`,
        d.tests[i][0]
      );
      writeFile(
        `./src/${contestName}/tests/out/${d.level}${i + 1}.txt`,
        d.tests[i][1]
      );
    }
  }
}

main();

/**
 * 指定されたパスへファイルを書き込む。
 * 何らかの原因(ファイルがすでに存在する等)でエラーが発生した場合はエラーを出力するだけで特に何も返さない。
 * @param path ファイルを書き込むパス
 * @param data 書き込む文字列
 */
function writeFile(path: string, data: string) {
  try {
    fs.writeFileSync(path, data, {
      flag: "wx",
    });
  } catch (e) {
    console.error(
      `エラー: ファイル(${path})作成不能 (原因: 既存ファイルとの重複 等)`
    );
  }
}
