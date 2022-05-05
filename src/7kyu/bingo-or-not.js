function bingo(a) {
  return ["b", "i", "n", "g", "o"].every((q) =>
    a
      .map((q) => String.fromCharCode(q + 96))
      .join("")
      .includes(q)
  )
    ? "WIN"
    : "LOSE";
}

module.exports = bingo;
