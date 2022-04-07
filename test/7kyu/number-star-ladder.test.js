const pattern = require("../../src/7kyu/number-star-ladder");
const chai = require("chai");
const assert = chai.assert;

describe("Number-Star ladder Tests", () => {
  it("Basic Test", () => {
    assert.equal(pattern(3), "1\n1*2\n1**3");
    assert.equal(pattern(7), "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
    assert.equal(
      pattern(20),
      "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20"
    );
  });
});
