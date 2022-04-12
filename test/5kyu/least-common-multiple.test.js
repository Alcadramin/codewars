const lcm = require("../../src/5kyu/least-common-multiple");
const chai = require("chai");
const assert = chai.assert;

describe("Least Common Multiple Tests", () => {
  it("Basic assert", () => {
    assert.equal(lcm(2, 5), 10);
    assert.equal(lcm(2, 3, 4), 12);
    assert.equal(lcm(9), 9);
  });
});
