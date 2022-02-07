const sum = (arr, from, to) =>
  arr.slice(from, to).reduce((pv, cv) => pv + cv, 0);
const findEvenIndex = (arr) =>
  arr.findIndex((_, i) => sum(arr, 0, i) === sum(arr, i + 1));
