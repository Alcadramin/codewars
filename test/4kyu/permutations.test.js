const permutations = require("../../src/4kyu/permutations");
const chai = require("chai");
const assert = chai.assert;

describe("Permutations Tests", function () {
  it("examples from description", function () {
    assert.deepEqual(permutations("a"), ["a"]);
    assert.deepEqual(permutations("ab").sort(), ["ab", "ba"].sort());
    assert.deepEqual(
      permutations("aabb").sort(),
      ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
    );
  });
});
