function sum() {
  return Array.from(arguments).reduce((prev, curr) => prev + curr, 0);
}

module.exports = sum;
