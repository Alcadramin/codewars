const sum = require("../../src/7kyu/sum-of-all-arguments");
const chai = require("chai");
const assert = chai.assert;

describe("Sum of all arguments Tests", () => {
  it("Small tests", () => {
    assert.equal(sum(1), 1);
    assert.equal(sum(1, 2), 3);
    assert.equal(sum(5, 7, 9), 21);
    assert.equal(sum(12, 1, 1, 1, 1), 16);
    assert.equal(sum(12, 1, 1, 1, 1, 1, 1), 18);
  });
});
