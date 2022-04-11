function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  return [
    ...new Set(
      str
        .split("")
        .reduce(
          (acc, curr, i) =>
            acc.concat(
              permutations(str.slice(0, i) + str.slice(i + 1)).map(
                (q) => curr + q
              )
            ),
          []
        )
    ),
  ];
}

module.exports = permutations;
