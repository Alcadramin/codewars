const maskify = require("../../src/7kyu/credit-card-mask");
const chai = require("chai");
const assert = chai.assert;

describe("Credit Card Mask Tests", function () {
  it("Basic Test", function () {
    assert.equal(maskify("4556364607935616"), "############5616");
    assert.equal(maskify("1"), "1");
    assert.equal(maskify("11111"), "#1111");
  });
});
