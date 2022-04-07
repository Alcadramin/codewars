function isIsogram(str) {
  const lc = str.toLowerCase();

  return lc.split("").every((q, i) => lc.indexOf(q) === i);
}

module.exports = isIsogram;
