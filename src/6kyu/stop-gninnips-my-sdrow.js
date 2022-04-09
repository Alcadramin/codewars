function spinWords(string) {
  return string
    .split(" ")
    .map((q) => (q.length >= 5 ? q.split("").reverse("").join("") : q))
    .join(" ");
}

module.exports = spinWords;
