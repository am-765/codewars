export const duplicateEncode = (word: string) =>
  word
    .toLowerCase()
    .split("")
    .map((el, _, arr) => (arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")"))
    .join("");
