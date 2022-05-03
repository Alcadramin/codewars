function solution(input, markers) {
  const comments = input.split("\n");

  markers.forEach((marker) => {
    comments.forEach((comment, i) => {
      const pos = comment.indexOf(marker);
      if (pos >= 0) comments[i] = comment.substring(0, pos).trim();
    });
  });

  return comments.join("\n");
}

module.exports = solution;
