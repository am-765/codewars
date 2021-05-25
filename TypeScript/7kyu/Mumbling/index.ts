export const accum = (s: string): string =>
  s
    .split("")
    .map((el, id) => el.toUpperCase() + el.toLocaleLowerCase().repeat(id))
    .join("-");
