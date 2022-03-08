export const squareSum = (numbers: number[]): number =>
  numbers.reduce((pv, cv) => pv + cv ** 2, 0);
