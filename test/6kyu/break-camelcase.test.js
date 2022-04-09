const solution = require("../../src/6kyu/break-camelcase");
const chai = require("chai");
const assert = chai.assert;

describe("Break camelCase Tests", () => {
  it("Basic Test", () => {
    assert.equal(solution("camelCasing"), "camel Casing", "Unexpected result");
    assert.equal(
      solution("camelCasingTest"),
      "camel Casing Test",
      "Unexpected result"
    );
  });
});
