const solution = require("./solution");
const path = require("path");
const { readFileSync } = require("fs");

test("basic", () => {
  expect(solution(["un", "iq", "ue"])).toEqual(4);
  expect(solution(["cha", "r", "act", "ers"])).toEqual(6);
  expect(
    solution([
      "ogud",
      "ejipchfydrgl",
      "b",
      "kjxmzhnuoisgqvawel",
      "mizlcgdqebwuotfnk",
      "bjvkrgeozidytquchlw",
      "tzjqwumkirxeal",
      "x",
      "rkpuabmo",
      "mxndpcqzua",
    ])
  ).toEqual(20);
});

test.skip("medium", () => {
  const n = readFileSync(
    path.resolve(__dirname, "medium.input"),
    "utf8"
  ).toString();
  const [a, b] = n.split("\n");
  expect(["un", "iq", "ue"]).toEqual();
});

test.skip("large", () => {
  const n = readFileSync(
    path.resolve(__dirname, "large.input"),
    "utf8"
  ).toString();
  const [a, b] = n.split("\n");
  expect(["un", "iq", "ue"]).toEqual();
});
