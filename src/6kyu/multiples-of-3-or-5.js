function solution(number, sum = 0) {
  Array.from({ length: number - 1 }, (_, i) => i + 1).map(
    (q) => (q % 3 === 0 || q % 5 === 0) && (sum += q)
  );
  return sum;
}

module.exports = solution;
