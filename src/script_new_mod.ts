export default {};

import jsdom from "jsdom";
const { JSDOM } = jsdom;

/**
 * 1つの問題の情報。
 */
export type TaskData = {
  contest: string; // コンテスト名。abc123
  url: string; // 各問題のURL
  level: string; // 難度。a や b など
  tests: [string, string][]; // テストケース
};

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

/**
 * コンテストの情報を取得する。
 * @param contest コンテスト名。URLの一部
 * @returns コンテストの情報。取得できなかった場合は undefined。
 */
export async function getContestData(
  contest: string
): Promise<TaskData[] | undefined> {
  const url = `https://atcoder.jp/contests/${contest}/tasks`;
  let data: TaskData[] = [];

  try {
    // 基本情報(問題の一覧)を取得する。
    const dom = await JSDOM.fromURL(url);
    data = await getTaskData(dom);

    // 各問題のテストケースを取得する。
    for (const d of data) {
      const dom = await JSDOM.fromURL(d.url);
      const c = await getTestCases(dom);
      if (c != undefined) {
        d.tests = c;
      }
    }

    return data;
  } catch (e) {
    return undefined;
  }
}

/**
 * DOMからコンテストの基本情報を取得する。ただしテストケースは取得しない。
 * @param dom データを取得するDOM
 * @returns コンテストの基本情報を埋めたデータ
 */
export async function getTaskData(dom: jsdom.JSDOM): Promise<TaskData[]> {
  const array: TaskData[] = [];

  const td = dom.window.document.querySelectorAll(
    ".table-striped td.text-center"
  );

  td.forEach((v) => {
    const text = v.textContent?.trim();
    if (text === "提出" || text == undefined) {
      return;
    }
    const a = (v.childNodes[0] as HTMLAnchorElement).href;
    const items = a.split("/");

    let data: TaskData = {
      contest: items[items.length - 3],
      url: a,
      level: text.toLowerCase(),
      tests: [],
    };
    array.push(data);
  });

  return array;
}

// DOM からテストケースを取得する。戻り値は入力例と出力例がペアになった配列。
export async function getTestCases(
  dom: jsdom.JSDOM
): Promise<[string, string][] | undefined> {
  const caseIn = [];
  const caseOut = [];
  const pre = dom.window.document.querySelectorAll("h3 + pre");

  // 英語版があるので、pre要素の半分までだけを見る
  for (let i = 0; i < pre.length / 2; i++) {
    const v = pre[i];
    const text = v.textContent ?? "";

    if (i % 2 === 0) {
      caseIn.push(text);
    } else {
      caseOut.push(text);
    }
  }

  const data: [string, string][] = [];
  for (let i = 0; i < caseIn.length; i++) {
    data.push([caseIn[i], caseOut[i]]);
  }

  return data;
}
