const User = require("../../src/4kyu/codewars-style-ranking-system");
const chai = require("chai");
const assert = chai.assert;

describe("Codewars style ranking system Tests", () => {
  it("Basic Test", () => {
    const user = new User();
    user.incProgress(-7); // will add 10 progress
    user.incProgress(-5); // will add 90 progress

    assert.equal(user.rank, -7);
    assert.equal(user.progress, 0);
  });
});
