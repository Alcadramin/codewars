const findUniq = require("../../src/6kyu/find-the-unique-number-1");
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Find the unique number Tests", () => {
  it("Basic Test", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});
