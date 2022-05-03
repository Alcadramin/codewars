const validParentheses = require("../../src/5kyu/valid-parentheses");
const chai = require("chai");
const assert = chai.assert;

describe("Valid Parentheses Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
});
