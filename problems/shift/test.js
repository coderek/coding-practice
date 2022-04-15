const solution = require("./solution");
const path = require('path')
const { readFileSync } = require("fs");

test("basic", () => {
  expect(
    solution('abc', [3,5,9])
  ).toEqual('rpl');
  expect(
    solution('aaa', [1,2,3])
  ).toEqual('gfd');
});

test.skip("medium", () => {
  const n = readFileSync(path.resolve(__dirname, 'medium.input'), 'utf8').toString()
  const [a, b] = n.split('\n')
  expect('abc', [3,5,9]).toEqual()
})

test.skip("large", () => {
  const n = readFileSync(path.resolve(__dirname, 'large.input'), 'utf8').toString()
  const [a, b] = n.split('\n')
  expect('abc', [3,5,9]).toEqual()
})
