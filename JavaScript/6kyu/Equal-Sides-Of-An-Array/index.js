const findEvenIndex = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum === arr.slice(i + 1).reduce((pv, cv) => pv + cv, 0)) {
      return i;
    }
    sum += arr[i];
  }
  return -1;
};
