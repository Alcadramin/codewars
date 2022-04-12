// This will check opposite directions with RegExp and remove it recursively until it doesn't match.
// NORTHSOUTHSOUTHEASTWESTNORTHWEST -> SOUTHEASTWESTNORTHWEST
// SOUTHEASTWESTNORTHWEST -> SOUTHNORTHWEST
// SOUTHNORTHWEST -> WEST
function opposite(str) {
  const exp = /EASTWEST|WESTEAST|NORTHSOUTH|SOUTHNORTH/g;
  return exp.test(str) ? opposite(str.replace(exp, "")) : str;
}

function dirReduc(arr) {
  const reduced = opposite(arr.join(""));
  return reduced.match(/(EAST|WEST|NORTH|SOUTH)/g) || [];
}

module.exports = dirReduc;
