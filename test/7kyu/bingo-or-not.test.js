const bingo = require("../../src/7kyu/bingo-or-not");
const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.equal(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
    assert.equal(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");
  });
});
