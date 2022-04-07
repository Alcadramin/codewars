function getCount(str) {
  let vowelsCount = 0;
  str
    .split("")
    .map((q) => ["a", "e", "i", "o", "u"].includes(q) && vowelsCount++);

  return vowelsCount;
}

module.exports = getCount;
