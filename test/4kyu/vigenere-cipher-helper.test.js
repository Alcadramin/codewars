const VigenèreCipher = require('../../src/4kyu/vigenere-cipher-helper');
const chai = require("chai");
const assert = chai.assert;

describe("Vigenère Cipher Helper Tests", () => {
  it("Basic Test", () => {
    var abc, key;
    abc = "abcdefghijklmnopqrstuvwxyz";
    key = "passwordaaaa"
    c = new VigenèreCipher(key, abc);

    assert.equal(c.encode('codewars'), 'rovwsoiv');
    assert.equal(c.decode('rovwsoiv'), 'codewars');

//    assert.equal(c.encode("it's a shift cipher!"), "xt'k s ovzii cahdsi!");

    assert.equal(c.encode('waffles'), 'laxxhsj');
    assert.equal(c.decode('laxxhsj'), 'waffles');

    assert.equal(c.encode('CODEWARS'), 'CODEWARS');
    assert.equal(c.decode('CODEWARS'), 'CODEWARS');

  });
});

