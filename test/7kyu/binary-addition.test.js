const addBinary = require("../../src/7kyu/binary-addition");
const chai = require("chai");
const assert = chai.assert;

describe("Binary Addition Tests", function () {
  it('Should return "11"', function () {
    assert.equal(addBinary(1, 2), "11");
  });
});
