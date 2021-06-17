const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((el, _, arr) => (arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")"))
    .join("");
