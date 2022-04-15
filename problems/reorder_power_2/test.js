const solution = require("./solution");
const path = require('path')
const { readFileSync } = require("fs");

test.only("basic", () => {
  expect(
    solution(1)
  ).toEqual(true);
  expect(
    solution(10)
  ).toEqual(false);
});

test("medium", () => {
  const n = readFileSync(path.resolve(__dirname, 'medium.input'), 'utf8').toString()
  const [a, b] = n.split('\n')
  expect(1).toEqual()
})

test("large", () => {
  const n = readFileSync(path.resolve(__dirname, 'large.input'), 'utf8').toString()
  const [a, b] = n.split('\n')
  expect(1).toEqual()
})
