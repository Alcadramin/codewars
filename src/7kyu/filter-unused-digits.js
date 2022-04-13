function unusedDigits() {
  return [...Array(10).keys()]
    .filter((q) => !Array.from(arguments).join().includes(q))
    .join("");
}

module.exports = unusedDigits;
