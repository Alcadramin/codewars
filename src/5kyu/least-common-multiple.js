// Euclid algorithm : https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations
function gcd(x, y) {
  return x ? gcd(y % x, x) : y;
}

function calcLcm(x, y) {
  return x * (y / gcd(x, y));
}

function lcm() {
  return Array.from(arguments).reduce(calcLcm);
}

module.exports = lcm;
