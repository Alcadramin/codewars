function validParentheses(parens) {
  return parens.match(/\(\)/g)
    ? validParentheses(parens.replace(/\(\)/g, ""))
    : parens === "";
}

module.exports = validParentheses;
