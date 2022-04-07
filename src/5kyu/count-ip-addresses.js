function convert(ip) {
  let count = 0;
  ip.split(".").map((q) => (count += Number(q).toString(2).padStart(8, "0")));

  return parseInt(count, 2);
}

function ipsBetween(start, end) {
  return convert(end) - convert(start);
}

module.exports = ipsBetween;
