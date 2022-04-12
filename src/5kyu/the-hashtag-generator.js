function generateHashtag(str) {
  const res = str
    .split(" ")
    .map((q) => q.charAt(0).toUpperCase() + q.slice(1))
    .join("");
  return res.length < 140 && res.length > 1 && `#${res}`;
}

module.exports = generateHashtag;
