function nextBigger(n) {
  const arr = n.toString().split("");
  const length = arr.length;

  if (length === 1) {
    return -1;
  }

  let i = 0;

  for (i = length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      break;
    }
  }

  if (i !== 0) {
    for (let j = length - 1; j >= i; j--) {
      if (arr[i - 1] < arr[j]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  } else {
    return -1;
  }

  return +arr.slice(0, i).concat(arr.slice(i, arr.length).reverse()).join("");
}

module.exports = nextBigger;
