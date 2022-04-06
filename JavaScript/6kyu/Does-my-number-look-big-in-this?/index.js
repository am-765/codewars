const narcissistic = (value) =>
  [...`${value}`]
    .map(Number)
    .reduce((pv, cv, _, arr) => pv + cv ** arr.length, 0) === value;
