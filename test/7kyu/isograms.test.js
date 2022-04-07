const isIsogram = require("../../src/7kyu/isograms");
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Isograms Tests", () => {
  it("Basic Test", () => {
    assert.strictEqual(isIsogram("Dermatoglyphics"), true);
    assert.strictEqual(isIsogram("isogram"), true);
    assert.strictEqual(
      isIsogram("aba"),
      false,
      "same chars may not be adjacent"
    );
    assert.strictEqual(
      isIsogram("moOse"),
      false,
      "same chars may not be same case"
    );
    assert.strictEqual(isIsogram("isIsogram"), false);
    assert.strictEqual(
      isIsogram(""),
      true,
      "an empty string is a valid isogram"
    );
  });
});
