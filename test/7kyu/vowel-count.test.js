const getCount = require("../../src/7kyu/vowel-count");
const chai = require("chai");
const assert = chai.assert;

describe("Vowel Count Tests", function () {
  it("Basic Test", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});
