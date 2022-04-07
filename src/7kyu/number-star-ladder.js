function pattern(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .map((q) => (q === 1 ? "1" : `1${Array(q).join("*")}${q}`))
    .join("\n");
}

module.exports = pattern;
