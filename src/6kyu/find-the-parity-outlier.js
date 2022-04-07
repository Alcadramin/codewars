function findOutlier(integers, evenOdd = { even: [], odd: [] }) {
  integers.map((q) => {
    var isOdd = q % 2 ? "odd" : "even";
    evenOdd[isOdd][evenOdd[isOdd].length] = q;
  });

  return evenOdd.odd.length > evenOdd.even.length
    ? evenOdd.even[0]
    : evenOdd.odd[0];
}

module.exports = findOutlier;
