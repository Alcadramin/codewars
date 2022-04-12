const nextBigger = require("../../src/4kyu/next-bigger-number-with-the-same-digits");
const chai = require("chai");
const assert = chai.assert;

describe("Next bigger number with the same digits Tests", () => {
  it("Basic Test", () => {
    assert.equal(nextBigger(12), 21);
    assert.equal(nextBigger(513), 531);
    assert.equal(nextBigger(2017), 2071);
    assert.equal(nextBigger(414), 441);
    assert.equal(nextBigger(144), 414);
    assert.equal(nextBigger(999), -1);
  });
});
