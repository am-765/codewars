const persistence = (num) => {
  let count = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((ac, cv) => ac * cv);
    count++;
  }
  return count;
};
