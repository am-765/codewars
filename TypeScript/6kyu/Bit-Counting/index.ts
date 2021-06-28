export const countBits = (n: number) =>
  n.toString(2).split("0").join("").length;
