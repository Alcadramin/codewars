const toJadenCase = require("../../src/7kyu/jaden-casing-strings");
const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    String.prototype.toJadenCase = toJadenCase;
    var str = "How can mirrors be real if our eyes aren't real";

    assert.equal(
      str.toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
