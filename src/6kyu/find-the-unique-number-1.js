function findUniq(arr) {
  return +arr.filter((q) => arr.indexOf(q) === arr.lastIndexOf(q));
}

module.exports = findUniq;
