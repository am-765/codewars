const solution = (number) =>
  number > 0
    ? [...Array(number).keys()]
        .filter((el) => el % 3 === 0 || el % 5 === 0)
        .reduce((ac, cv) => ac + cv)
    : 0;
