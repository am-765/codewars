const accum = (s) =>
  s
    .split("")
    .map((el, id) => el.toUpperCase() + el.toLowerCase().repeat(id))
    .join("-");
