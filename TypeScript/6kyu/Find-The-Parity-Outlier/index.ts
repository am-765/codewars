export const findOutlier = (integers: number[]): number => {
  const odd = integers.filter((el) => el % 2);
  const even = integers.filter((el) => el % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
};
