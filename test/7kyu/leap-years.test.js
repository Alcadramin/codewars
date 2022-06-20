const isLeapYear = require('../../src/7kyu/leap-years');
const chai = require("chai");
const assert = chai.assert;

describe('Leap Year Basic Tests', function() {
  it('should detect leap years', function() {
    assert.equal(isLeapYear(1234), false, 'Year 1234');
    assert.equal(isLeapYear(1984), true, 'Year 1984');
    assert.equal(isLeapYear(2000), true, 'Year 2000');
    assert.equal(isLeapYear(2010), false, 'Year 2010');
    assert.equal(isLeapYear(2013), false, 'Year 2013');
  });
});
