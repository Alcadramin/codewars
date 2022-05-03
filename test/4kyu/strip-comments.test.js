const solution = require("../../src/4kyu/strip-comments");
const chai = require("chai");
const assert = chai.assert;

describe("Strip Comments Tests", () => {
  it("Basic Test", () => {
    assert.equal(
      solution("apples, plums % and bananas\npears\noranges !applesauce", [
        "%",
        "!",
      ]),
      "apples, plums\npears\noranges"
    );
    assert.equal(solution("Q @b\nu\ne -e f g", ["@", "-"]), "Q\nu\ne");
  });
});
