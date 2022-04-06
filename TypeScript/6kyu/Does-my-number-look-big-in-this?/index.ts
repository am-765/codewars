export const narcissistic = (value: number): boolean =>
  [...`${value}`]
    .map(Number)
    .reduce((pv, cv, _, arr) => pv + cv ** arr.length, 0) === value;
