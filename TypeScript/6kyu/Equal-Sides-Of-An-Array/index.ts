const sum = (arr: number[], from: number, to?: number) =>
  arr.slice(from, to).reduce((pv, cv) => pv + cv, 0);

export const findEvenIndex = (arr: number[]): number => {
  return arr.findIndex((_, i) => sum(arr, 0, i) === sum(arr, i + 1));
};
