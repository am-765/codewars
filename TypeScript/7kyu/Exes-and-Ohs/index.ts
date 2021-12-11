export const xo = (str: string) => {
  const x = (str.match(/x/gi) || []).length;
  const o = (str.match(/o/gi) || []).length;
  return x === o;
};
