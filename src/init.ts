// コンテストで使用するスクリプトや入力例を AtCoder のサイトから取得して初期化するスクリプト。
// 入力例等の取得方法がかなり適当なので、どれくらいちゃんと動くか自信がない。
// npx ts-node init abc012

export default {};

import { exit } from "process";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import fs from "fs";

// スクリプトのテンプレート
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

/**
 * 1つの問題の情報。
 */
type TaskInfo = {
  contest: string;
  url: string;
  level: string; // 難度。a や b など
  inputs: string[]; // 入力例
};

async function main() {
  const argv = process.argv;

  if (argv.length < 3) {
    console.log(
      "エラー: コマンドライン引数としてコンテスト名(例:abc123)を指定してください"
    );
    exit(0);
  }

  const contestName = argv[2];

  // コンテストの問題のURLのリストを取得する。
  const urls = await getTasksURLs(contestName);
  if (urls == undefined) {
    console.error("エラー: コンテストの情報を取得できませんでした");
    exit(0);
  }

  // 出力先フォルダが存在しない場合は作成する。
  if (!fs.existsSync(contestName)) {
    fs.mkdirSync(contestName);
  }
  fs.mkdirSync(`${contestName}/tests`);

  // 各問題の情報を取得し、スクリプトとテストケースのファイルを作成する。
  // ファイルがすでに存在する場合は上書きしない。
  for (const url of urls) {
    const task = await getTaskInfo(url);
    if (task == undefined) {
      continue;
    }

    // スクリプト
    writeFile(`${contestName}/${task.level}.ts`, TEMPLETE);

    // 入力例
    for (let i = 0; i < task.inputs.length; i++) {
      writeFile(
        `${contestName}/tests/${task.level}${i + 1}.txt`,
        task.inputs[i]
      );
    }
  }
}

main();

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

// 指定されたパスへファイルを書き込む。
// 何らかの原因(ファイルがすでに存在する等)でエラーが発生した場合はエラーを出力するだけ。
function writeFile(path: string, data: string) {
  try {
    fs.writeFileSync(path, data, {
      flag: "wx",
    });
  } catch (e) {
    console.error(
      `エラー: ファイル(${path})が既に存在する等で作成できませんでした`
    );
  }
}

/**
 * 指定されたコンテスト内に存在する問題のURLのリストを返す。
 * @param contest コンテスト名
 * @returns 各問題のURLのリスト。取得できなかったときは
 */
async function getTasksURLs(contest: string): Promise<string[] | undefined> {
  const url = `https://atcoder.jp/contests/${contest}/tasks`;
  const set = new Set<string>();

  try {
    const dom = await JSDOM.fromURL(url);
    // const dom = await JSDOM.fromFile("./init_test1.html");
    const aTags = dom.window.document.querySelectorAll(
      ".table-striped tbody a"
    );
    aTags.forEach((v) => {
      const href = (v as HTMLAnchorElement).href;
      if (!href.includes("submit?")) {
        set.add(href);
      }
    });
    return Array.from(set);
  } catch (e) {
    return undefined;
  }
}

/**
 * 1つの問題の情報を取得する。
 * @param url 1つの問題のURL
 * @returns 問題の情報。見付からなかったときは undefined
 */
async function getTaskInfo(url: string): Promise<TaskInfo | undefined> {
  const item = url.split("/");

  const task: TaskInfo = {
    contest: item[4],
    url: url,
    level: item[6].split("_")[1],
    inputs: [],
  };

  try {
    const dom = await JSDOM.fromURL(url);
    // const dom = await JSDOM.fromFile("./init_test5.html");
    const pre = dom.window.document.querySelectorAll("h3 + pre");
    for (let i = 0; i < pre.length; i++) {
      if (i % 2 === 1) {
        continue;
      }
      const v = pre[i];
      const text = v.textContent ?? "";
      task.inputs.push(text);
    }
  } catch (e) {
    return undefined;
  }

  return task;
}
