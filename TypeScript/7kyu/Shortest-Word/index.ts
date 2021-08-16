export const findShort = (s: string): number => Math.min(...s.split(' ').map((el) => el.length));
