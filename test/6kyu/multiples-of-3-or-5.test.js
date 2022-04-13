const solution = require("../../src/6kyu/multiples-of-3-or-5");

const { assert } = require("chai");

function test(n, expected) {
  let actual = solution(n);
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(10, 23);
});
