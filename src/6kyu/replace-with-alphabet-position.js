function alphabetPosition(text) {
  return text
    .replace(/[^A-Za-z]/gi, "")
    .split("")
    .map((q) => q.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}

module.exports = alphabetPosition;
