import { describe, test, expect } from "vitest";
import jsdom from "jsdom";
import { getTaskData, getTestCases } from "./script_new_mod";

describe("Get tasks", () => {
  test("Only ABC (ABC219)", async () => {
    const dom = await jsdom.JSDOM.fromFile("./script_test_files/list/1.html");
    const data = await getTaskData(dom);

    expect(data.length).toBe(8);
    expect(data[0].contest).toEqual("abc219");
    expect(data[0].url.endsWith("abc219/tasks/abc219_a")).toBeTruthy();
    expect(data[0].level).toEqual("a");

    expect(data[7].contest).toEqual("abc219");
    expect(data[7].url.endsWith("abc219/tasks/abc219_h")).toBeTruthy();
    expect(data[7].level).toEqual("h");
  });

  test("Mix ABC and ARC (ABC065)", async () => {
    const dom = await jsdom.JSDOM.fromFile("./script_test_files/list/2.html");
    const data = await getTaskData(dom);

    expect(data.length).toBe(4);
    expect(data[0].contest).toEqual("abc065");
    expect(data[0].url.endsWith("abc065/tasks/abc065_a")).toBeTruthy();
    expect(data[0].level).toEqual("a");

    expect(data[3].contest).toEqual("abc065");
    expect(data[3].url.endsWith("abc065/tasks/arc076_b")).toBeTruthy();
    expect(data[3].level).toEqual("d");
  });
});

describe("Get test cases", () => {
  test("A", async () => {
    const dom = await jsdom.JSDOM.fromFile("./script_test_files/task/1.html");
    const data = await getTestCases(dom);
    if (data === undefined) {
      expect.unreachable("returned undefined value");
    }
    expect(data.length).toBe(2);
    expect(data[0][0]).toEqual("3\n-2 10\n3 10\n12 10\n");
    expect(data[0][1]).toEqual("11\n");
    expect(data[1][0]).toEqual(
      "5\n0 1000000000\n0 1000000000\n1 1000000000\n2 1000000000\n3 1000000000\n"
    );
    expect(data[1][1]).toEqual("4999999994\n");
  });
});
