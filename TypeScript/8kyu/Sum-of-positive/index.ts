export const positiveSum = (arr: number[]) =>
  arr.reduce((ac, cv) => ac + (cv > 0 ? cv : 0), 0);
