function toJadenCase() {
  const str = Object.values(this).join("");

  return str
    .split(" ")
    .map((q) => q.charAt(0).toUpperCase() + q.slice(1))
    .join(" ");
}

module.exports = toJadenCase;
